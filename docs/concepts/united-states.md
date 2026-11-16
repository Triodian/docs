---
title: United States
audience: [practitioner, board, contributor]
apps: [suite]
jurisdictions: [us]
lastReviewed: 2026-11-17
sidebar_position: 3
---

The suite treats the United States as a **baseline jurisdiction with sector overlays**.

There is no federal law on artificial intelligence (AI). Since 2025, federal agencies have been withdrawing or narrowing rules specific to AI. This means the binding rules are sector laws applied to AI. They cover model risk, third-party risk, privacy and safeguarding, nondiscrimination and incident reporting. Federal supervisors set these rules. For insurance and much of consumer protection, the states set them.

Most of the content comes from 5 of the baseline profiles. Each main sector adds the instruments listed below.

> **Status, 15 November 2026.** US support is available. It includes:
>
> - the 8 US sectors in the Metamodel
> - the US records in the Obligations Atlas (federal, and New York, California, Texas and Colorado)
> - the 5 sector packs
> - 5 worked examples
> - the United States option in the installer.
>
> You can choose the United States in the picker in the top bar.

## The 5 main sectors

We scored 7 possible sectors against the 5 tests in [adding a jurisdiction](/reference/apps/metamodel/adding-a-jurisdiction). The tests are:

- how widely binding rules apply
- board accountability
- buyers
- route to market
- fit with the apps.

The 5 highest-scoring sectors became the main sectors. Each sector pack is generated as an overlay on its baseline.

| Sector | Pack | Baseline | Score (of 10) |
| --- | --- | --- | --- |
| Banking | `usBanking` | BP-BANKING | 10 |
| Insurance | `usInsurance` | BP-INSURANCE | 10 |
| Securities and investment advice | `usSecurities` | BP-SECURITIES | 9 |
| Health care | `usHealth` | BP-HEALTH | 8 |
| Critical infrastructure | `usCriticalInfrastructure` | BP-CI-CORPORATE, or BP-CI-GOVERNMENT for a government-run operator | 8 |

Listed companies scored 7. They use the general path. The Securities and Exchange Commission (SEC) cybersecurity disclosure rules ask how the board oversees cyber risk, but they do not say how the board must do it.

Payments and money transmission scored 6. It uses its baseline without a US overlay. Licensing is done state by state, and the binding rules are not specific to AI. These rules include the Gramm-Leach-Bliley Act (GLBA) Safeguards Rule and state money transmitter laws.

## What each overlay adds

Each instrument has a tier, using the same tiers as the Atlas:

- **binding**: laws and binding instruments
- **expected**: supervisory guidance
- **anticipated**: proposals and rules not yet in force
- **adopted**: standards an organisation chooses to follow.

**Banking.** Regulators are the Office of the Comptroller of the Currency (OCC), the Federal Reserve, the Federal Deposit Insurance Corporation (FDIC), the National Credit Union Administration (NCUA) and state regulators.

- SR 26-2 / OCC Bulletin 2026-13 is the revised model risk management guidance of 17 April 2026. It replaced SR 11-7. It covers vendor models and AI that is not generative or agentic. It does not cover generative or agentic AI. It states that it is not enforceable (expected).
- The 2023 Interagency Guidance on Third-Party Relationships still applies (expected). A proposed replacement was published on 11 September 2026 and is not yet final (anticipated).
- New York's 23 NYCRR 500 is binding in that state.

The pack asks for:

- a model inventory, with validation of vendor models
- governance of generative and agentic AI outside SR 26-2
- management of the third-party lifecycle under the 2023 guidance, with the proposal flagged
- reports to the board on material model and third-party risk.

**Insurance.** State regulators oversee insurance. The National Association of Insurance Commissioners (NAIC) coordinates them.

- The NAIC Model Bulletin on the Use of AI Systems by Insurers (December 2023) has been adopted by about 25 states and the District of Columbia. It asks for a written AI program, governance, testing and oversight of third parties (expected; binding where a state has made it binding).
- The New York State Department of Financial Services (NYDFS) Insurance Circular Letter No. 7 (July 2024) covers AI and external data in underwriting and pricing, and terms in vendor contracts.
- Colorado's regulations on algorithms and predictive models are binding for the lines of insurance they cover.

The pack records each state's adoption of the bulletin as a setting. It lists the Circular Letter 7 vendor terms in the document list.

**Securities and investment advice.** Regulators are the SEC, the Financial Industry Regulatory Authority (FINRA) and state regulators.

- Regulation S-P, as amended in 2024, is binding. It applies to larger entities from 3 December 2025 and smaller entities from 3 June 2026. It covers incident response, customer notification and oversight of service providers, including terms requiring notice within 72 hours.
- FINRA Rule 3110 applies to AI. FINRA's 2026 Regulatory Oversight Report sets out what supervisors expect for generative AI and agents. This covers autonomy, scope, auditability and data.
- The SEC withdrew its predictive data analytics proposal on 12 June 2025. The pack does not include it.

The pack asks for written supervisory procedures for generative AI and agents, and for oversight of service providers under Regulation S-P.

**Health care.** Regulators are the Department of Health and Human Services (HHS), the Food and Drug Administration (FDA) and state boards.

- 45 CFR 92.210 (Section 1557) has been binding since May 2025. Covered entities must identify patient care decision support tools that use protected characteristics, and reduce the risk of discrimination.
- The Health Insurance Portability and Accountability Act (HIPAA) is binding.
- The HTI-5 final rule (28 October 2026) removes the HTI-1 model card and risk management criteria for certified health IT from 28 December 2026. Providers still have their duty under 92.210.
- FDA guidance applies only to AI regulated as a medical device.
- The Texas Responsible Artificial Intelligence Governance Act (TRAIGA) and state medical board rules require providers to disclose when they use AI in care.

The pack asks for an inventory of patient care decision support tools, with the 92.210 record of how risk was reduced. HTI-5 no longer requires certified health IT vendors to supply some information. The pack asks organisations to require it in their contracts instead.

**Critical infrastructure.** Regulators are the Cybersecurity and Infrastructure Security Agency (CISA) and sector agencies. These include the Federal Energy Regulatory Commission (FERC) and the North American Electric Reliability Corporation (NERC), the Transportation Security Administration (TSA) and the Environmental Protection Agency (EPA).

- NERC Critical Infrastructure Protection (CIP) reliability standards and TSA security directives are binding in their sectors. They apply to AI tools inside regulated environments.
- The final rule under the Cyber Incident Reporting for Critical Infrastructure Act (CIRCIA) was sent for review on 1 October 2026 (anticipated). Once in force, it will require incident reports within 72 hours and ransom payment reports within 24 hours, across all 16 sectors.
- CISA's guidance on AI in operational technology (OT) and the NIST AI Risk Management Framework (RMF) are expected or adopted.

The pack asks for AI tools inside regulated OT environments to be authorised, listed in an inventory and monitored. It also asks organisations to be ready for CIRCIA.

**State law across all sectors.** These laws apply in all 5 sectors:

- **California.** The California Privacy Protection Agency (CPPA) regulations cover automated decision-making technology (ADMT), risk assessments and cybersecurity audits. ADMT duties apply from 1 January 2027. Existing processing must be assessed by 31 December 2027.
- **Texas.** TRAIGA applies from 1 January 2026. It prohibits some intentional uses and requires disclosure. The Attorney General enforces it, and organisations have a period to fix a breach.
- **Colorado.** SB 26-189 was signed on 14 May 2026 and applies from 1 January 2027. It replaced the risk management and impact assessment duties in the 2024 Colorado AI Act with ADMT disclosure and transparency duties.

The NIST AI RMF and ISO/IEC 42001 are adopted standards. The NAIC bulletin names them as frameworks an AI program may rely on.

The Atlas records state laws under the United States, with the state's name in the record's title.

## The worked examples

There are 5 fictional organisations, one for each main sector, with a fictional counsel firm. The bank and the insurer go through the whole regulated chain. The other 3 use AI Board Direction only.

| Example | Sector | Runs |
| --- | --- | --- |
| Harlow Ridge Bank | Banking | AI Board Direction, AI Risk Appetite, AI Use Assessment |
| Ashgrove Mutual Insurance Company | Insurance | AI Board Direction, AI Risk Appetite, AI Use Assessment |
| Quillfield Securities | Securities and investment advice | AI Board Direction |
| Fernhollow Health | Health care | AI Board Direction |
| Ridgeline Power & Transmission | Critical infrastructure | AI Board Direction |

You can open each example from **Practice** in the app switcher, or from the United States row in Triodian Start.

## What is different in the apps

- AI Board Direction's set-up includes the United States. Each overlay pack is offered only in its own jurisdiction. For example, the app does not suggest the Monetary Authority of Singapore (MAS) pack to a US financial institution.
- The director briefing at B0 includes examples of AI failures in the US. B3 suggests one use the board may want to rule out. Each names the instruments it is based on.
- AI Risk Appetite adds US inputs and, for health care and critical infrastructure, the consequence question at decision 2.
- AI Use Assessment adds the US document list and the main arrangement type. It reads a US matter brief and shows its jurisdiction.
- Outside Australia, outputs only have ISO/IEC 42001 evidence tags. The tags for the Australian Prudential Regulation Authority (APRA) letter and CPS 230 are Australian only. The evidence index is called the ISO/IEC 42001 evidence index.
- A US install starts each app with the pack for the chosen sector. If there is no pack, it uses the overlay on the sector's baseline. If there is no overlay, it uses the baseline.
- Fees for US engagements are set at US market levels in US dollars, not converted from Australian dollars.

The instruments on this page are current at 14 November 2026. We check them again every quarter. Nothing here is legal advice.

## Sources

- [Federal Reserve SR 26-2, Revised Guidance on Model Risk Management](https://www.federalreserve.gov/supervisionreg/srletters/sr2602.htm)
- [OCC Bulletin 2026-46, Third-Party Risk Management: Proposed Guidance](https://occ.gov/news-issuances/bulletins/2026/bulletin-2026-46.html)
- [Federal Register, Proposed Third-Party Risk Management Guidance (15 Sep 2026)](https://www.federalregister.gov/documents/2026/09/15/2026-18859/proposed-third-party-risk-management-guidance)
- [NAIC, Artificial Intelligence and Insurance Regulation (2026)](https://content.naic.org/research/jir/artificial-intelligence-and-insurance-regulation)
- [NYDFS Insurance Circular Letter No. 7 (2024)](https://www.dfs.ny.gov/industry-guidance/circular-letters/cl2024-07)
- [45 CFR 92.210](https://www.customsmobile.com/regulations/45/92.210)
- [ONC HTI-5 final rule (Akin summary)](https://www.akingump.com/en/insights/ai-law-and-regulation-tracker/onc-issues-hti-5-final-rule-removing-model-card-and-risk-management-requirements-for-predictive-decision-support-interventions)
- [FINRA 2026 Regulatory Oversight Report: GenAI and agents (Debevoise summary)](https://www.debevoise.com/insights/publications/2025/12/finras-2026-regulatory-oversight-report-continued)
- [Regulation S-P amendments (Holland & Knight summary)](https://www.hklaw.com/en/insights/publications/2026/05/regulation-s-p-amendments-compliance-deadline-approaching)
- [CISA submits final CIRCIA rule for OMB review (Covington)](https://www.insideprivacy.com/critical-infrastructure/cisa-submits-final-circia-rule-for-omb-review/)
- [NERC Reliability Standards](https://www.nerc.com/pa/Stand/Pages/ReliabilityStandards.aspx)
- [CPPA ADMT, risk assessment and audit regulations (Hunton summary)](https://www.hunton.com/privacy-and-information-security-law/cppa-finalizes-ccpa-regulations-on-automated-decision-making-technology-risk-assessments-and-cybersecurity-audits)
- [Texas Attorney General, TRAIGA](https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-ai-rights)
- [Colorado AI Act amended and delayed, SB 26-189 (Hunton summary)](https://www.hunton.com/privacy-and-information-security-law/colorado-ai-act-amended-and-effective-date-delayed)
