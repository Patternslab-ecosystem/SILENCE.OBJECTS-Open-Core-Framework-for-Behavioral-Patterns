
# Business & Monetization Overview

## Business model: buyer‑based open‑core

SILENCE.OBJECTS uses a **buyer‑based open‑core** model. The foundational layer of the system (type and event contracts, `@silence/*` packages, and the reference PatternLens application) is available under the MIT license.

This is intentional:

- it builds an ecosystem of developers and researchers around a coherent, well‑documented framework,
- it positions SILENCE.OBJECTS as a default standard for **non‑clinical structural analysis of behavioral patterns**,
- it creates a natural conversion path to paid, enterprise‑grade layers when organizations need scale, governance, and compliance.

Commercial value appears exactly where DIY usage of the open‑core stops being enough and where **real responsibility** begins: for people, teams, organizations, and regulators.

***

## Value architecture: where we monetize

**Open‑core layer (MIT, public):**

- type and event contracts (`@silence/contracts`),
- pattern analysis modules (`@silence/behavioral-sequences`, `@silence/rhythmic-patterns`, `@silence/cognitive-load`, `@silence/capacity-recovery`, `@silence/attention-profiles`),
- S11 language guardrails (`@silence/language`, `@silence/validator`),
- design system (`@silence/ui`),
- reference PatternLens client as a concrete implementation of the protocols.

**Enterprise layer (commercial, closed):**

- **SILENCE Engine** – the integrated, production‑ready version of the framework with AI, prediction, and orchestration (`ee/@silence/behavioral-engine`, `ee/@silence/ai`, `ee/@silence/predictive`, `ee/@silence/safety`, `ee/@silence/orchestrator`, and others),
- **Portal** – management console for organizations (monitoring, billing, compliance, audit),
- **PatternsLab** – analytics and research platform for teams and institutions (aggregations, trends, governance).

The monorepo enforces this separation by design: `packages/` contains open‑core modules, `ee/` contains closed modules. Removing `ee/` does not break open‑core compilation.

***

## Three monetization tiers

### 1. PatternLens PRO (B2C / prosumer)

PatternLens is the flagship reference application – voice‑first, offline‑first, designed for neuroatypical users (dark mode, monospace, no gamification).

The **FREE** tier is genuinely usable and trust‑building:

- full 4‑phase reports (Context, Tension, Meaning, Function),
- safety features,
- limited archive horizon.

The **PRO** tier adds:

- extended archive horizon (up to 24 months of interpretations),
- full “Ghost Patterns” history – structural indicators over time (cycles, tensions, capacity),
- advanced export and reporting for personal analysis or work with external professionals (without any built‑in therapy functions).


Guiding principle for PatternLens PRO: **“more visibility over time, not more care”**. The product does not present itself as therapy, does not make wellbeing promises, and focuses only on increasing structural visibility into one’s own mechanisms.

***

### 2. PatternsLab & Portal (B2B / teams & organizations)

PatternsLab is a platform for teams and institutions that need to work with aggregated signals from work and collaboration, under **EU AI Act limited‑risk** and **GDPR** constraints.

It provides:

- aggregated views (capacity, tensions, rhythms) with anonymization thresholds (e.g. N ≥ 3 or higher, configurable per client),
- team trend analysis without ranking individuals or inferring health status,
- full compliance support: row‑level security, audit trail, role‑based access, safety profile declarations, and automatic generation of documentation fragments required for AI governance,
- integrations with HR / operations systems (calendars, ticketing, communication tools) in enterprise mode.

Portal is the management layer on top:

- usage metrics and AI cost tracking (budgets, quotas, kill‑switch),
- consent overview, privacy, and safety configuration,
- tenant, role, and data‑granularity management.


This combination gives clients predictable base costs plus flexible scaling with adoption, without aggressive price increases.

***

### 3. Enterprise Engine & Integrations

The highest tier consists of partnership deployments where the **SILENCE Engine** is integrated into existing client systems as an analytical layer.

Typical scenarios:

- **HR tech** – analyzing patterns of workload and burnout risk in teams based on behavioral data (work and collaboration events), without clinical classifications or “flagging” individuals.
- **wellbeing‑adjacent platforms** – exposing structural indicators (capacity, tensions, rhythms) as an additional, non‑clinical signal alongside existing metrics.
- **research tools** – access to anonymized, structural data (sequences, rhythms, capacity indicators, attention profiles) under an Academic Data Contract, with clear separation of roles and regulatory responsibilities.


This allows the Engine to be sold both as an “analytical plugin” for existing stacks and as the core of a full platform for organizations.

***

## Growth levers and competitive advantages

### 1. Open ecosystem as PLG funnel

Open‑core (`@silence/*` packages + free PatternLens) lowers the barrier to entry. The more developers and researchers build on the framework, the more naturally enterprise‑level needs emerge. Only the requirements that cannot be satisfied by a 1–2 person “hack” on open‑core become paid.

### 2. Regulatory compliance as a moat

SILENCE.OBJECTS is designed from day one for EU AI Act (limited‑risk), GDPR, and Data Act. Core contracts and S11 language rules encode non‑negotiable boundaries:

- no diagnostic functions,
- no medical or psychological pattern detection,
- no recommendations or “advice” – only structural hypotheses.

For institutions, these are hard requirements. In SILENCE.OBJECTS they are part of the contracts, language, and architecture, not an afterthought.

### 3. Structural data, not raw content

The system does not treat raw user content as the primary asset. Instead, it focuses on **structural data**: sequences, rhythms, tensions, capacity signals, attention profiles. This:

- reduces privacy risk,
- simplifies privacy‑by‑design compliance,
- lowers regulatory overhead (fewer high‑risk data surfaces).

### 4. Hybrid revenue (subscription + usage‑based)

Combining subscriptions (PatternLens PRO, tenant licenses) with usage‑based components (AI tokens, events, active users) provides:

- predictable recurring revenue,
- organic revenue growth as usage grows,
- no need for frequent price hikes.

This setup is familiar to the market from modern AI‑SaaS platforms.

### 5. Clear boundaries between FREE and PRO / Enterprise

In B2C:

- FREE is truly useful: full reports, safety, basic archive.
- PRO expands time horizon, depth, and export options, but does not introduce dark patterns or dependencies.

In B2B / enterprise:

- clear separation between PatternsLab, Portal, and Engine,
- safety and compliance capabilities are **foundational**, not “premium add‑ons”.

***

## Summary

SILENCE.OBJECTS is not another wellbeing app. It is **infrastructure** for non‑clinical, structural analysis of behavioral patterns in an environment of neurodiversity and information overload.

The open‑core model gives:

- low customer acquisition cost via community and research adoption,
- high barriers to entry due to deeply integrated compliance and language sterility,
- scalable revenue through three monetization tiers with clear upgrade paths.

Full product, safety, AI, runtime, and monetization specifications are maintained in this repository and can be explored in more depth by investors and partners. On request, we also provide extended documentation packages and model contracts (e.g., for enterprise and academic deployments) under appropriate agreements.
