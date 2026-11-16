---
title: Baselines and jurisdictions
audience: [practitioner, operator, contributor]
apps: [suite]
jurisdictions: [au, us, other]
lastReviewed: 2026-11-17
sidebar_position: 3
---

This page lists where the reference data for baselines, sectors and jurisdictions is stored, and the identifiers the apps use. For an explanation of these, see [Baselines, overlays and the 4 controls](/concepts/baselines-overlays-and-controls).

## Files

| Data | File (Triodian_Metamodel) | Schema |
| --- | --- | --- |
| The 8 baseline profiles | [`reference-data/baseline-profiles.json`](https://github.com/Triodian/Triodian_Metamodel/blob/main/reference-data/baseline-profiles.json) | `schemas/baseline-profile.schema.json` |
| The 4 baseline controls BC1 to BC4 | [`reference-data/baseline-controls.json`](https://github.com/Triodian/Triodian_Metamodel/blob/main/reference-data/baseline-controls.json) | `schemas/baseline-control.schema.json` |
| Jurisdictions, regulated sectors, `mainSector` and `baselineProfiles` | [`reference-data/regulated-sectors.json`](https://github.com/Triodian/Triodian_Metamodel/blob/main/reference-data/regulated-sectors.json) | Checked by continuous integration (CI). The validator rejects a baseline reference it does not recognise, and more than 5 main sectors in a jurisdiction |
| Entity types | `regulatedEntityType` in the Metamodel (2.4.0 and later) | Metamodel schema |

See also the Metamodel's pages: [best-practice baselines](/reference/apps/metamodel/baselines), [adding a jurisdiction](/reference/apps/metamodel/adding-a-jurisdiction), [shared vocabulary](/reference/apps/metamodel/shared-vocabulary).

## Identifiers

| Baseline ID | Profile | Governing body label |
| --- | --- | --- |
| BP-BANKING | Banking | Board |
| BP-INSURANCE | Insurance | Board |
| BP-SECURITIES | Securities and investment advice | Board |
| BP-HEALTH | Health care | Board |
| BP-PAYMENTS | Payments and money transmission | Board |
| BP-CI-GOVERNMENT | Critical infrastructure, managed by government | Accountable authority |
| BP-CI-CORPORATE | Critical infrastructure, managed by a company | Board |
| BP-GOVERNMENT | Government in general | Accountable authority |

| Jurisdiction | Metamodel version | Main sectors (5 at most) | Pack IDs in the apps |
| --- | --- | --- | --- |
| Australia | 2.8.0 | superannuation, banking, insurance, health, critical infrastructure | general insurer, superannuation trustee, authorised deposit-taking institution (ADI) (earlier packs); baseline packs for the others |
| Singapore | 2.8.0 | banking, insurance, capital markets, listed companies, critical infrastructure | financial institution regulated by the Monetary Authority of Singapore (MAS); baseline packs |
| United States | 2.9.0 | banking, insurance, securities, health care, critical infrastructure (8 sectors defined. Payments uses BP-PAYMENTS. Listed companies and general organisations use the general path) | `usBanking`, `usInsurance`, `usSecurities`, `usHealth`, `usCriticalInfrastructure`; examples `us-banking`, `us-insurance`, `us-securities`, `us-health`, `us-critical-infrastructure` |

## Where the controls appear

| Control | App | Identifier |
| --- | --- | --- |
| BC1 agent controls | AI Use Assessment | Register entries at A3 and above; output AC |
| BC2 fast path | AI Board Direction | B4; board directions event FP in BD3 |
| BC3 evidence register | AI Use Assessment | Output ER |
| BC4 productivity measures | AI Risk Appetite; AI Board Direction | M11, M12; BM7, BM8; the board view |

## Overlay files

The overlay tool in each app repository generates a jurisdiction's packs from an overlay file. The first overlay file was `content/overlays/us.json`. The overlay names the baseline each sector builds on. It adds the jurisdiction's instruments, examples of AI failures, documents and inputs. To change a pack, change the overlay and rebuild. Do not edit the pack directly.
