---
title: Sign-in and SSO
audience: [operator]
apps: [suite]
lastReviewed: 2026-11-16
sidebar_position: 2
---

How people sign in to a deployment of the suite, and how to put the organisation's own identity provider (Entra ID, Google Workspace, Okta, or any OpenID Connect provider) in front of it.

## What the apps do, and do not do, with identity

Every app of the suite treats identity the same way:

- **A provider proves an email address.** That is the whole of what the provider supplies. Which provider depends on the deployment (below).
- **Roles stay in the app.** Who is counsel, who is the assessor, who may approve, is set by the deployment's administrators in each app's Admin screen and kept in the app's own store. No group, role or claim from the provider is read as a role, and nothing the provider says can make someone an administrator. Separation of duties (a peer reviewer who is not the assessor, a second approver where the GC acts as counsel) is enforced by the app on those roles.
- **One sign-in for the suite.** With the shared identity database, signing in to one app signs the person in to the others on the same parent domain; signing out of one signs out of all.
- **Multi-factor authentication and offboarding come from the provider.** Whatever the organisation enforces at sign-in applies to the apps. A person disabled in the provider can no longer start a session; a session already started runs out at its expiry (twelve hours) or at sign-out.

The provider sees that a person signed in. It does not see what they recorded.

## Which provider a deployment uses

A deployment has one provider, chosen by the `IDENTITY_PROVIDER` variable on each app.

| Deployment | Provider | Variable |
|---|---|---|
| Cloudflare (the reference deployment, and what the installer makes) | **Cloudflare Access** in front of `/auth/email`. Access runs the sign-in and hands the app a signed token with the email. | unset, or `access` |
| A host Access does not cover (another cloud, or the apps run on Node) | The app is its own **OpenID Connect relying party** and talks to the organisation's provider directly. | `oidc` |

Behind Access, use Access; it is where the Cloudflare deployment's session boundary is stated in the [security answers](/reference/apps/install/security-answers). Not behind Access, use OIDC. One deployment does not run both.

## Cloudflare Access: the organisation's provider federated in Access

This is the usual route for a Cloudflare deployment. The apps are unchanged; the organisation's provider is added to Access, and Access's email one-time code is switched off for the application so the provider is the only way in.

1. In Cloudflare Zero Trust, **Settings → Authentication → Login methods**, add the provider. Cloudflare's own guides cover each one: Entra ID (as "Azure AD"), Google Workspace, Okta, or a generic OIDC or SAML provider. The provider needs the redirect URL Cloudflare shows there, and Cloudflare needs the client id and secret the provider issues.
2. In **Access → Applications**, open each app's application (the installer makes one per app, covering `/auth/email`). Under **Login methods**, select the provider and clear *One-time PIN*, so the organisation's people sign in through their provider and nobody signs in by email code alone.
3. Keep the application's policy as the installer set it (the organisation's email domain, or the named people). The policy decides who may reach the app; the provider decides who they are.
4. Sign in to one app. The sign-in page's *Sign in with your work email* goes to Access, Access goes to the provider, and the app starts the suite session.

Nothing on the app's side changes: no variable, no deploy. The provider's MFA and offboarding now apply.

## OpenID Connect direct: a deployment not behind Access

For a deployment where Access is not in front of the app (the apps on Node in another cloud, which the [roadmap](/roadmap) lists as a deployment platform), the app talks to the provider itself.

Register the app with the provider as a web application with the authorization-code flow:

| Setting at the provider | Value |
|---|---|
| Redirect URI | `https://<the app's host>/auth/oidc/callback`, one per app |
| Grant | Authorization code, with PKCE |
| Scopes | `openid email profile` |
| Claims | The `email` claim must be released (and `email_verified` where the provider has it) |

Then set, on each app:

| Variable | Value |
|---|---|
| `IDENTITY_PROVIDER` | `oidc` |
| `OIDC_ISSUER` | The issuer URL exactly as the provider's discovery document states it (the app reads `<issuer>/.well-known/openid-configuration`). Entra ID: `https://login.microsoftonline.com/<tenant id>/v2.0`. Google: `https://accounts.google.com`. Okta: `https://<your domain>.okta.com` or the authorization server's issuer. |
| `OIDC_CLIENT_ID` | The client id the provider issued |
| `OIDC_CLIENT_SECRET` | The client secret, held as a secret, not a variable. Omit it for a public client that uses PKCE alone. |
| `OIDC_SCOPES` | Optional; `openid email profile` by default |

What the app checks on every sign-in: the ID token's signature against the provider's published keys, its issuer, that it was issued for this client, its expiry and time claims, and that it answers the sign-in this app started (nonce). The email must be present, and not marked unverified. Anything else, and there is no identity: the person is sent back to the sign-in page.

A sign-in in flight (state, nonce, the PKCE verifier and where to go afterwards) is kept in the session database for ten minutes and used once; nothing about it is kept in a cookie.

## What a reviewer can be told

- Sign-in is the organisation's identity provider, through Cloudflare Access on the Cloudflare deployment or directly on another.
- MFA and offboarding are inherited from the provider.
- Roles are set in the app by its administrators, not by the provider, and cannot be granted by a provider claim.
- The provider sees sign-ins, not engagement content.

The same statement is in the security answer pack's SSO row, which cites this page.

## Where the code is

`lib/identity/provider.js` chooses the adapter; `lib/identity/cloudflare-access.js` and `lib/identity/oidc.js` are the two; `lib/identity/session.js` starts the session either way. The files are the same in every app of the suite and kept identical by `tools/sync-identity.mjs`.
