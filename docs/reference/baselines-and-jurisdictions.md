---
title: Baselines and jurisdictions
audience: [practitioner, operator, contributor]
apps: [suite]
jurisdictions: [au, us, other]
lastReviewed: 2026-11-15
sidebar_position: 3
---

Where the reference data for baselines, sectors and jurisdictions lives, and the identifiers the apps use. The explanation is in [Baselines, overlays and the four controls](/concepts/baselines-overlays-and-controls).

## Files

| Data | File (Triodian_Metamodel) | Schema |
| --- | --- | --- |
| The eight baseline profiles | [`reference-data/baseline-profiles.json`](https://github.com/Triodian/Triodian_Metamodel/blob/main/reference-data/baseline-profiles.json) | `schemas/baseline-profile.schema.json` |
| The four baseline controls BC1 to BC4 | [`reference-data/baseline-controls.json`](https://github.com/Triodian/Triodian_Metamodel/blob/main/reference-data/baseline-controls.json) | `schemas/baseline-control.schema.json` |
| Jurisdictions, regulated sectors, `mainSector` and `baselineProfiles` | [`reference-data/regulated-sectors.json`](https://github.com/Triodian/Triodian_Metamodel/blob/main/reference-data/regulated-sectors.json) | Validated in CI; the validator rejects an unknown baseline reference and more than five main sectors per jurisdiction |
| Entity types | `regulatedEntityType` in the Metamodel (2.4.0 and later) | Metamodel schema |

The Metamodel's own pages: [best-practice baselines](/reference/apps/metamodel/baselines), [adding a jurisdiction](/reference/apps/metamodel/adding-a-jurisdiction), [shared vocabulary](/reference/apps/metamodel/shared-vocabulary).

## Identifiers

| Baseline id | Profile | Governing body label |
| --- | --- | --- |
| BP-BANKING | Banking | Board |
| BP-INSURANCE | Insurance | Board |
| BP-SECURITIES | Securities and investment advice | Board |
| BP-HEALTH | Health care | Board |
| BP-PAYMENTS | Payments and money transmission | Board |
| BP-CI-GOVERNMENT | Critical infrastructure, government-managed | Accountable authority |
| BP-CI-CORPORATE | Critical infrastructure, corporate-managed | Board |
| BP-GOVERNMENT | Government in general | Accountable authority |

| Jurisdiction | Metamodel version | Main sectors (five at most) | Pack ids in the apps |
| --- | --- | --- | --- |
| Australia | 2.8.0 | superannuation, banking, insurance, health, critical infrastructure | general insurer, super trustee, ADI (earlier packs); baseline packs for the rest |
| Singapore | 2.8.0 | banking, insurance, capital markets, listed companies, critical infrastructure | MAS-regulated financial institution; baseline packs |
| United States | 2.9.0 | banking, insurance, securities, health care, critical infrastructure (eight sectors defined; payments on BP-PAYMENTS, listed and general on the general path) | `usBanking`, `usInsurance`, `usSecurities`, `usHealth`, `usCriticalInfrastructure`; examples `us-banking`, `us-insurance`, `us-securities`, `us-health`, `us-critical-infrastructure` |

## Where the controls surface

| Control | App | Identifier |
| --- | --- | --- |
| BC1 agent controls | AI Use Assessment | Register entries at A3 and above; output AC |
| BC2 fast path | AI Board Direction | B4; board directions event FP in BD3 |
| BC3 evidence register | AI Use Assessment | Output ER |
| BC4 productivity measures | AI Risk Appetite; AI Board Direction | M11, M12; BM7, BM8; the board view |

## Overlay files

A jurisdiction's packs are generated from an overlay file by the overlay tool in each app repository: `content/overlays/us.json` is the first. The overlay names the baseline each sector builds on and adds the jurisdiction's instruments, failure cases, documents and inputs. Changing a pack means changing the overlay and rebuilding, not editing the pack.
