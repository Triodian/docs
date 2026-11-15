---
title: United States
audience: [practitioner, board, contributor]
apps: [suite]
jurisdictions: [us]
lastReviewed: 2026-11-15
sidebar_position: 3
---

The United States is treated as a **baseline jurisdiction with sector overlays**: there is no federal AI statute, and since 2025 federal agencies have been withdrawing or narrowing AI-specific rules, so what binds is sector law applied to AI (model risk, third-party risk, privacy and safeguarding, nondiscrimination, incident reporting), set by federal supervisors and, for insurance and much of consumer protection, by the states. The five baseline profiles carry most of the work; each main sector adds the instruments below.

> **Status, 15 November 2026.** US support is in place: the eight US sectors in the Metamodel, the US records in the Obligations Atlas (federal, and New York, California, Texas and Colorado), the five sector packs, five worked examples and the installer's United States option. The picker in the top bar offers the United States.

## The five main sectors

Seven candidate sectors were scored on the five tests in [adding a jurisdiction](/reference/apps/metamodel/adding-a-jurisdiction) (reach of binding rules, board accountability, buyers, route to market, fit with the apps). The top five are the main sectors; each pack is generated as an overlay on its baseline.

| Sector | Pack | Baseline | Score (of 10) |
| --- | --- | --- | --- |
| Banking | `usBanking` | BP-BANKING | 10 |
| Insurance | `usInsurance` | BP-INSURANCE | 10 |
| Securities and investment advice | `usSecurities` | BP-SECURITIES | 9 |
| Health care | `usHealth` | BP-HEALTH | 8 |
| Critical infrastructure | `usCriticalInfrastructure` | BP-CI-CORPORATE, or BP-CI-GOVERNMENT for a government-run operator | 8 |

Listed companies (7) use the general path: SEC cybersecurity disclosure asks how the board oversees cyber risk but does not set the oversight. Payments and money transmission (6) uses its baseline without a US overlay, because licensing is state by state and the binding reach (the GLBA Safeguards Rule, state money transmitter laws) is not AI-specific.

## What each overlay adds

Tiers follow the Atlas: **binding** (law and binding instruments), **expected** (supervisory guidance), **anticipated** (proposals and pending rules), **adopted** (standards an organisation chooses).

**Banking** (OCC, Federal Reserve, FDIC, NCUA; state regulators). SR 26-2 / OCC Bulletin 2026-13, the revised model risk management guidance of 17 April 2026, replaced SR 11-7; it reaches vendor models and non-generative, non-agentic AI, places generative and agentic AI outside its scope, and says it is not enforceable (expected). The 2023 Interagency Guidance on Third-Party Relationships remains in effect (expected) while the proposed replacement of 11 September 2026 is pending (anticipated). New York's 23 NYCRR 500 binds in that state. The pack asks for a model inventory with validation of vendor models, generative and agentic AI governed outside SR 26-2, the third-party lifecycle under the 2023 guidance with the proposal flagged, and board reporting of material model and third-party risk.

**Insurance** (state regulators; NAIC coordinates). The NAIC Model Bulletin on the Use of AI Systems by Insurers (December 2023), adopted by about 25 states and DC, asks for a written AI programme, governance, testing and third-party oversight (expected; binding where a state has made it so). NYDFS Insurance Circular Letter No. 7 (July 2024) covers AI and external data in underwriting and pricing and vendor contract terms. Colorado's regulations on algorithms and predictive models bind for covered lines. The pack records state-by-state adoption of the bulletin as a setting and the Circular Letter 7 vendor terms as a document-list item.

**Securities and investment advice** (SEC, FINRA; state regulators). Regulation S-P as amended in 2024 binds (larger entities from 3 December 2025, smaller from 3 June 2026): incident response, customer notification, service provider oversight with 72-hour notice terms. FINRA Rule 3110 applies to AI, and FINRA's 2026 Regulatory Oversight Report sets out supervisory expectations for generative AI and agents (autonomy, scope, auditability, data). The SEC's predictive data analytics proposal was withdrawn on 12 June 2025 and is not carried. The pack asks for written supervisory procedures for generative AI and agents, and Reg S-P service provider oversight.

**Health care** (HHS, FDA; state boards). 45 CFR 92.210 (Section 1557) binds from May 2025: covered entities identify patient care decision support tools that use protected characteristics and mitigate discrimination risk. HIPAA binds. The HTI-5 final rule (28 October 2026) removes the HTI-1 model-card and risk-management criteria for certified health IT from 28 December 2026; the provider duty under 92.210 stays. FDA guidance applies to device-regulated AI only. Texas TRAIGA and state medical-board rules require disclosure of AI use in care. The pack asks for an inventory of patient care decision support tools with the 92.210 mitigation record, and vendor information that HTI-5 no longer obliges certified health IT to supply, asked for by contract instead.

**Critical infrastructure** (CISA; sector agencies such as FERC/NERC, TSA, EPA). NERC CIP reliability standards and TSA security directives bind in their sectors and reach AI tools inside regulated environments. The CIRCIA final rule (sent for review on 1 October 2026) is anticipated: 72-hour incident and 24-hour ransom-payment reports across all 16 sectors once in force. CISA's AI-in-OT guidance and the NIST AI RMF are expected or adopted. The pack asks for AI tools inside regulated OT environments to be authorised, inventoried and monitored, and for CIRCIA readiness.

**Cross-sector state law**, which applies across the five: California's CPPA regulations on automated decision-making technology, risk assessments and cybersecurity audits (ADMT duties from 1 January 2027; existing processing assessed by 31 December 2027); Texas TRAIGA (from 1 January 2026: prohibited intentional uses, disclosure, Attorney General enforcement with a cure period); Colorado SB 26-189 (signed 14 May 2026, from 1 January 2027), which replaced the 2024 Colorado AI Act's risk-management and impact-assessment duties with ADMT disclosure and transparency. The NIST AI RMF and ISO/IEC 42001 are adopted standards, named by the NAIC bulletin as frameworks an AI programme may rely on. State laws are recorded in the Atlas under the United States with the state in the record's title.

## The worked examples

Five fictional organisations, one per main sector, with an invented counsel firm. The bank and the insurer run the whole regulated chain; the other three run AI Board Direction.

| Example | Sector | Runs |
| --- | --- | --- |
| Harlow Ridge Bank | Banking | AI Board Direction, AI Risk Appetite, AI Use Assessment |
| Ashgrove Mutual Insurance Company | Insurance | AI Board Direction, AI Risk Appetite, AI Use Assessment |
| Quillfield Securities | Securities and investment advice | AI Board Direction |
| Fernhollow Health | Health care | AI Board Direction |
| Ridgeline Power & Transmission | Critical infrastructure | AI Board Direction |

Each opens from the app switcher's Practice entry and from Triodian Start's United States row.

## What is different in the apps

- AI Board Direction's set-up offers the United States; an overlay pack is offered only in its own jurisdiction, and a US financial institution is not suggested the MAS pack.
- The director briefing at B0 carries US failure cases, and B3 offers one use to consider ruling out, each naming the instruments it draws on.
- AI Risk Appetite adds US inputs and, for health care and critical infrastructure, the consequence question at decision 2.
- AI Use Assessment adds the US document list and the main arrangement type, and reads a US matter brief with its jurisdiction named.
- Outside Australia, outputs carry ISO/IEC 42001 evidence tags only; the APRA letter and CPS 230 tags are Australian, and the evidence index is titled the ISO/IEC 42001 evidence index.
- A US install starts each app on the jurisdiction's own pack for the chosen sector, or its overlay on the sector's baseline, or the baseline.
- Fees for US engagements are set at US market levels in US dollars, not converted from Australian dollars.

Instruments on this page are as at 14 November 2026 and are re-checked each quarter. Nothing here is legal advice.

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
