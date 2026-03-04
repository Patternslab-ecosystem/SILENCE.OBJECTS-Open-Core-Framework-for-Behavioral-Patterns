> *Redesign the day, not the human.*

# 🤫 SILENCE.OBJECTS  
**Open‑Core Framework for Structural Behavioral Pattern Analysis (Non‑Clinical).

SILENCE.OBJECTS is a public, open‑core research framework for teams that want to work with **behavior patterns** in a structural, repeatable and regulation‑aware way – without entering the domain of medical or therapeutic diagnosis. 

***

## 🎨 First contact: a sterile cockpit, not a wellness app

The first contact with SILENCE.OBJECTS reference clients feels like stepping into a **dark analytical cockpit**, not a “wellness app”. The interface is designed to **amplify structural perception**, not to create more stimulation. [ppl-ai-file-upload.s3.amazonaws]

- **Void background** – OLED‑friendly near‑black (`#05060A`) to minimise visual noise and sensory load.
- **Single accent** – `Neural Blue` (`#32B8C6`) or `S11 Emerald` (`#1DBF8F`) as a single light source in the dark, encoding state or category.
- **Monospace / technical headings** – the UI reads like an instrument, not a social feed.
- **Asymmetry by design** – roughly 38% of the viewport is “signal”, 62% is “silence” (golden‑ratio‑inspired composition).  

The visual system is part of the hypothesis: **the interface should support structural observation of behavior, not self‑scoring or performance judgement.

***

## 🏛 Overview & Use Cases

SILENCE.OBJECTS is a monorepo framework for modelling **behavioral objects** and running a **4‑phase structural analysis** (Context → Tension → Meaning → Function).

Typical use cases:

- **PatternsLab (B2B dashboard)** – multi‑tenant observation cockpit for research, clinical‑adjacent or organisational teams that want to see patterns without turning them into diagnoses. 
- **Internal lab tools / consoles** – exploration of behavioral sequences (n‑grams, episodes, runs) at population level.
- **Integrations with existing products** – plugging structural pattern analysis in beside existing systems (EMR, LXP, educational apps) without changing their clinical / non‑clinical classification.  

The framework is **non‑clinical by design** – language, types and artifacts avoid diagnostic claims and medical taxonomies.
***

## 🚀 Repository Structure & Package Map

High‑level layout:

```txt
apps/               # Reference applications (PatternsLab dashboard, internal portals)
packages/@silence/  # Open Core (SDK, Contracts, Core, UI, Behavioral Modules)
ee/                 # Enterprise modules (behavioral engine, safety, compliance, audit)
docs/               # Architecture, Compliance, AI Contracts, S11 language specs
prisma/             # Open‑core behavioral data model (schema.prisma)
src/                # Shared runtime helpers, configuration, tooling
```

### Key Open‑Core Packages

- **`@silence/contracts`**  
  - TypeScript domain types and Zod schemas for:
    - Behavioral Objects (e.g. observation objects, episodes),  
    - Events (e.g. attention‑shift, aha‑moment),  
    - S11‑aligned metadata (language, context, sterility).
  - Linguistically sterile contract: no diagnostic labels, no ICD/DSM vocabulary.

- **`@silence/core`**  
  - 4‑phase structural analysis engine (Context, Tension, Meaning, Function) operating on `@silence/contracts`.
  - Deterministic API surface with no ML models in the runtime path, which simplifies auditing.

- **`@silence/behavioral-sequences`**  
  - Utilities for sequence‑level work: n‑grams, episodes, runs, day and week structures.

- **`@silence/sdk`**  
  - Facade and single entry point for applications:
    ```ts
    import { createSilenceClient } from '@silence/sdk';

    const sdk = createSilenceClient({ apiKey, region: 'eu-west-1' });
    const result = sdk.analyzePattern(...);
    ```
  - Single‑entry rule: apps do not import internal engines directly, which simplifies swaps, versioning and compliance.

***

## 🛠 Tech Stack

- **Monorepo**: Turborepo with pnpm for open‑core work and npm for CI builds. 
- **Frontend / UI**: Next.js 14 (App Router), React, Tailwind CSS, Soft Noir component system. 
- **Backend / ORM**: Prisma with PostgreSQL as the canonical behavioral data store.
- **Validation & contracts**: Zod plus S11 Language Contract (sterile, non‑clinical language).
***

## 🏗 Getting Started

Minimal local setup:

```bash
pnpm install

# Run the reference PatternsLab dashboard
pnpm dev --filter apps/patternslab

# Optional: governance / compliance portal
pnpm dev --filter apps/portal
```

The engine and contracts can also be consumed directly by importing from `@silence/*` in your own applications.

***

## 📜 Licensing

SILENCE.OBJECTS follows an **open‑core** model.

- **Open Core (`packages/@silence/**`)** – MIT license for contracts, SDK, core and UI helpers.  
- **Enterprise (`ee/**`)** – proprietary modules for decision engines, safety, compliance and AI contracts.  
- **Reference apps (`apps/*`)** – proprietary example implementations built on top of the open core.

The project is defined as **research‑grade and non‑clinical by design**, aligning architecture, language and runtime behavior with that constraint.
