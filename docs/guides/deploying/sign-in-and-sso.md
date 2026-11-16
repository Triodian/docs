---
title: Sign-in and SSO
audience: [operator]
apps: [suite]
lastReviewed: 2026-11-17
sidebar_position: 2
---

This guide explains how people sign in to a deployment of the suite. It also explains how to connect the organisation's own identity provider, such as Entra ID, Google Workspace, Okta or any OpenID Connect (OIDC) provider, so people sign in through it.

## What the apps do, and do not do, with identity

Every app of the suite treats identity the same way:

- **The provider confirms an email address.** That is the only thing the provider supplies. The provider you use depends on the deployment (see below).
- **Roles are managed in the app.** The deployment's administrators set roles, such as counsel, assessor or approver, in each app's Admin screen. The app stores the roles itself. The app does not treat any group, role or claim from the provider as a role. Nothing from the provider can make someone an administrator. The app uses these roles to enforce separation of duties. For example, a peer reviewer cannot be the assessor, and a second approver is needed if the general counsel (GC) acts as counsel.
- **One sign-in for the suite.** The apps share an identity database. When someone signs in to one app, they are signed in to the other apps on the same parent domain. When they sign out of one app, they are signed out of all of them.
- **The provider handles multi-factor authentication (MFA) and offboarding.** Any sign-in rules the organisation sets also apply to the apps. If someone is disabled in the provider, they cannot start a new session. A session that has already started ends when it expires (after 12 hours) or when the person signs out.

The provider can see that a person signed in. It cannot see what they recorded in the apps.

## Which provider a deployment uses

A deployment has one provider, chosen by the `IDENTITY_PROVIDER` variable on each app.

| Deployment | Provider | Variable |
|---|---|---|
| Cloudflare (the reference deployment, and what the installer sets up) | **Cloudflare Access** in front of `/auth/email`. Access handles the sign-in and gives the app a signed token with the email address. | not set, or `access` |
| A host that Access does not cover (another cloud, or the apps run on Node) | The app acts as an **OpenID Connect relying party** and connects to the organisation's provider directly. | `oidc` |

If the deployment is behind Access, use Access. The [security answers](/reference/apps/install/security-answers) describe the Cloudflare deployment's session boundary in terms of Access. If the deployment is not behind Access, use OIDC. A deployment cannot use both.

## Cloudflare Access: connect the organisation's provider to Access

This is the usual approach for a Cloudflare deployment. You do not change the apps. You add the organisation's provider to Access, then turn off Access's email one-time code for each app. This makes the provider the only way to sign in.

1. In Cloudflare Zero Trust, go to **Settings → Authentication → Login methods** and add the provider. Cloudflare has a guide for each provider: Entra ID (listed as "Azure AD"), Google Workspace, Okta, or a generic OIDC or Security Assertion Markup Language (SAML) provider. Give the provider the redirect URL that Cloudflare shows. Give Cloudflare the client ID and secret that the provider issues.
2. In **Access → Applications**, open the application for each app. The installer creates one for each app, covering `/auth/email`. Under **Login methods**, select the provider and clear *One-time PIN*. People now sign in through the organisation's provider. No one can sign in with an email code alone.
3. Leave the application's policy as the installer set it. The policy allows either the organisation's email domain or named people. The policy controls who can reach the app. The provider confirms who they are.
4. Sign in to one app to test it. On the sign-in page, select *Sign in with your work email*. This sends you to Access, then to the provider. When you have signed in, the app starts the suite session.

You do not need to change any variables or redeploy the apps. The provider's MFA and offboarding now apply.

## OpenID Connect: a deployment not behind Access

Some deployments do not use Access. For example, the apps may run on Node in another cloud. The [roadmap](/roadmap) lists these as deployment platforms. In these deployments, the app connects to the provider directly.

Register each app with the provider as a web application that uses the authorization code flow:

| Setting at the provider | Value |
|---|---|
| Redirect URI | `https://<the app's host>/auth/oidc/callback`, one per app |
| Grant | Authorization code, with Proof Key for Code Exchange (PKCE) |
| Scopes | `openid email profile` |
| Claims | The provider must release the `email` claim, and `email_verified` if it has one |

Then set these variables on each app:

| Variable | Value |
|---|---|
| `IDENTITY_PROVIDER` | `oidc` |
| `OIDC_ISSUER` | The issuer URL, exactly as it appears in the provider's discovery document. The app reads `<issuer>/.well-known/openid-configuration`. Entra ID: `https://login.microsoftonline.com/<tenant id>/v2.0`. Google: `https://accounts.google.com`. Okta: `https://<your domain>.okta.com` or the authorization server's issuer. |
| `OIDC_CLIENT_ID` | The client ID the provider issued |
| `OIDC_CLIENT_SECRET` | The client secret. Store it as a secret, not a variable. Leave it out for a public client that uses PKCE only. |
| `OIDC_SCOPES` | Optional. The default is `openid email profile` |

Each time someone signs in, the app checks:

- the ID token's signature, against the provider's published keys
- the token's issuer
- that the token was issued for this client
- the token's expiry and time claims
- that the token matches the sign-in this app started (the nonce)
- that the email is present and not marked as unverified.

If any check fails, the app does not accept the identity and sends the person back to the sign-in page.

While a sign-in is in progress, the app keeps its details in the session database for 10 minutes and uses them only once. These details are the state, the nonce, the PKCE verifier and the page to return to. None of them are stored in a cookie.

## What to tell a security reviewer

- People sign in with the organisation's identity provider. On Cloudflare this goes through Cloudflare Access. On other platforms the app connects to the provider directly.
- MFA and offboarding come from the provider.
- The app's administrators set roles in the app. The provider does not set roles, and a claim from the provider cannot grant a role.
- The provider can see sign-ins. It cannot see engagement content.

The security answers include the same statement in the single sign-on (SSO) row, with a link to this page.

## Where the code is

- `lib/identity/provider.js` chooses the adapter.
- `lib/identity/cloudflare-access.js` and `lib/identity/oidc.js` are the 2 adapters.
- `lib/identity/session.js` starts the session with either adapter.

These files are the same in every app in the suite. `tools/sync-identity.mjs` keeps them identical.
