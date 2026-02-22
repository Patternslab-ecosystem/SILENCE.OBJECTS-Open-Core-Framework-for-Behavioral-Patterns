
# SILENCE.OBJECTS — Open‑Core Framework for Behavioral Patterns

**To repozytorium zawiera publiczną, open‑core implementację frameworka SILENCE.OBJECTS oraz jego publiczne kontrakty.**  
Wszystkie moduły i aplikacje znajdujące się tutaj są dostępne na licencji MIT i mogą być swobodnie używane, modyfikowane i rozwijane przez społeczność, researcherów i firmy.

Moduły **enterprise** (SILENCE Engine, Portal, pełna warstwa monetyzacji, zaawansowane bezpieczeństwo, compliance i runtime) są rozwijane w **oddzielnym, prywatnym monorepo** i udostępniane wyłącznie na warunkach komercyjnych – dla klientów instytucjonalnych i partnerów strategicznych.

---

## Zakres publicznego repozytorium

Publiczna część SILENCE.OBJECTS obejmuje:

- **Open‑core packages (`@silence/*`)** – wszystkie moduły niezbędne do pracy z danymi behawioralnymi w sposób bezpieczny i zgodny z regulacjami (lista poniżej).
- **Referencyjną aplikację PatternLens (`apps/patternlens`)** – przykład użycia frameworka w praktyce (B2C, voice‑first, offline‑first).
- **Komplet dokumentacji kontraktów i zasad**:
  - `00-CONTRACT.md` – definiuje obiekt, 4 fazy analizy i stanowczo oddziela analizę od diagnozy.
  - `01-LANGUAGE.md` oraz S11 – system sterylności językowej (zakaz terminów klinicznych, język strukturalny).
  - `02-SAFETY.md`, `02/03-AI-CONTRACT.md`, `03-RUNTIME-MODES.md` – kontrakty bezpieczeństwa i tryby pracy AI.
  - `04-MONETIZATION.md`, `04-PRODUCT-RULES.md` – otwarte zasady monetyzacji (bez implementacji billingowej).
  - `05-PATTERNSLAB-PROFILE.md` – profil warstwy badawczej PatternsLab.

**Czego NIE ma w tym repozytorium (moduły enterprise):**

- `@silence/ee-behavioral-engine`, `@silence/ee-ai`, `@silence/ee-predictive`, `@silence/ee-intervention-timing`
- `@silence/ee-safety`, `@silence/ee-medical`, `@silence/ee-legal`, `@silence/ee-audit`
- `@silence/ee-analytics-dashboard`, `@silence/ee-billing`, `@silence/ee-orchestrator`, `@silence/ee-linkedin-agent`
- Portal, PatternsLab w wersji produkcyjnej, konfiguracje środowiskowe i pełne reguły RLS.

Wszystkie wymienione wyżej elementy są opisane w dokumentacji, ale ich implementacja pozostaje zamknięta i dostępna wyłącznie w modelu enterprise.

---

## Co jest w tym repo (scope)

### Open‑core packages (`@silence/*`) – MIT

- `@silence/contracts` — centralny kontrakt typów: Object, eventy, profile, metryki.
- `@silence/events` — typowany event bus, kompatybilny z Redis Streams / CloudEvents.
- `@silence/behavioral-sequences` — sekwencje zachowań (n‑gramy, przejścia, rytmy).
- `@silence/rhythmic-patterns` — rytmy uwagi jako behawioralne proxy, bez sygnałów medycznych.
- `@silence/cognitive-load` — obciążenie poznawcze z NASA‑TLX + niespecyficzne wskaźniki behawioralne.
- `@silence/capacity-recovery` — profile „capacity” (autonomia / kompetencja / zaangażowanie) jako self‑tracking, nie klinika.
- `@silence/attention-profiles` — adaptacyjne profile uwagi do zmiany UI (adaptive UI, not a diagnostic tool).
- `@silence/language` — S11 guardrails językowe (forbidden vocabulary, mapowania, enforcement).
- `@silence/validator` — walidacja kontraktów, eventów i konfiguracji + S11 w CI.
- `@silence/ui` — design system dla PatternLens, PatternsLab i Portalu.

### Referencyjna aplikacja B2C – PatternLens (`apps/patternlens`)

- Wejście Object (50–5000 znaków)
- Analiza 4‑fazowa (Context, Tension, Meaning, Function)
- Confidence scores + alternatywne interpretacje
- Archiwum interpretacji, eksport, podstawowe paywalle (FREE / PRO) na poziomie UX

### Kontrakty i zasady operacyjne (dokumentacja)

- `00-CONTRACT.md` — kontrakt ramowy: Object, 4 fazy, brak diagnozy, brak rekomendacji.
- `01-LANGUAGE.md` + S11 — system sterylności językowej (limited‑risk AI, brak języka klinicznego).
- `02-SAFETY.md`, `02-AI-CONTRACT.md`, `03-AI-CONTRACT.md`, `03-RUNTIME-MODES.md` — kontrakty bezpieczeństwa, tryby runtime i granice odpowiedzialności AI.
- `04-MONETIZATION.md`, `04-PRODUCT-RULES.md` — otwarte zasady monetyzacji (model FREE / PRO / ENTERPRISE), bez implementacji billingowej.
- `05-PATTERNSLAB-PROFILE.md` — profil PatternsLab jako warstwy research / B2B.

To repo można klonować, forknąć i używać jako **open‑core foundation** do własnych projektów produktowych i badawczych.

---

## Czego tutaj NIE ma (co jest prywatne / enterprise)

Świadomie **nie publikujemy** kodu, który stanowi nasz enterprise moat i warstwę produkcyjną dla klientów instytucjonalnych:

- **SILENCE Engine (closed, enterprise)** – prywatne pakiety `@silence/ee/*`, m.in.:
  - `@silence/ee-behavioral-engine` — fasada integrująca wszystkie moduły open‑core i orkiestrująca przepływy (bez redefiniowania logiki open).
  - `@silence/ee-ai` — warstwa LLM (Claude / GPT) z CFF, S11 Gateway i pełnym billingiem tokenów.
  - `@silence/ee-predictive`, `@silence/ee-intervention-timing` — predykcja trajektorii wzorców, JITAI dla instytucji.
  - `@silence/ee-safety`, `@silence/ee-medical`, `@silence/ee-legal`, `@silence/ee-audit` — moduły safety, compliance, EU AI Act / GDPR, audyt i post‑market monitoring.
  - `@silence/ee-analytics-dashboard`, `@silence/ee-billing`, `@silence/ee-orchestrator`, `@silence/ee-linkedin-agent` — dashboardy instytucjonalne, billing, orchestracja, B2B agents.

- **Portal / PatternsLab / pełne dashboardy B2B**:
  - zaawansowane widoki multi‑tenant, governance, role‑based access,
  - metryki dla zespołów, raporty instytucjonalne, integracje z systemami HR / ops.

- **Produkcja i infra**:
  - konfiguracja Vercel / Supabase / CI/CD dla środowisk produkcyjnych,
  - pełne reguły RLS, logika tenantów, scenariusze high‑risk (tam, gdzie EU AI Act wymaga szczegółowego Technical File).

To wszystko żyje w prywatnym monorepo (control plane), gdzie współpracujemy 1:1 z klientami i inwestorami.

---

## Model open‑core: jak z tego korzystać

Ten projekt jest zaprojektowany tak, żeby:

- **indywidualne osoby i zespoły dev / research**:
  - mogły używać open‑core pakietów (`@silence/*`) i referencyjnej aplikacji PatternLens jako punktu startowego do własnych narzędzi,
  - miały jasne kontrakty (00-CONTRACT, AI-CONTRACT, LANGUAGE, SAFETY), na których można oprzeć własne implementacje.

- **instytucje / partnerzy strategiczni**:
  - mogły wejść w warstwę enterprise (Engine, Portal, full dashboards) poprzez dedykowaną współpracę – bez otwierania kodu, ale z pełnym wglądem w kontrakty, dokumentację compliance i runtime modes.

Jeżeli budujesz produkt:

- możesz korzystać z open‑core na licencji MIT,
- możesz implementować własny silnik nad tymi samymi kontraktami,
- albo możesz współpracować z nami, żeby podłączyć się pod gotowy SILENCE Engine i Portal.

---

## Dla kogo jest ten projekt

- **Founders i product teams** – którzy chcą:
  - zbudować system pracy z wzorcami zachowania bez wchodzenia w obszar medyczny / terapeutyczny,
  - mieć od początku kontrakty zgodne z EU AI Act limited‑risk i S11 (brak diagnoz, brak rekomendacji „co robić z życiem”).

- **Zespoły badawcze i labs**:
  - które potrzebują spójnego modelu Objectów, eventów i profili, aby pracować na sekwencjach, rytmach, capacity, bez dotykania danych klinicznych.

- **Inwestorzy**:
  - którzy chcą zobaczyć:
    - co jest otwarte (pakiety, kontrakty, PatternLens),
    - co stanowi moat (Engine, Portal, enforcement safety / compliance / billing),
    - jak wygląda ścieżka monetyzacji (FREE / PRO / ENTERPRISE) i rozwój „nad” open‑core.

---

## Jak zacząć

```bash
git clone https://github.com/Patternslab-ecosystem/SILENCE.OBJECTS-monorepo-public-.git
cd SILENCE.OBJECTS-monorepo-public-
pnpm install
pnpm dev  # uruchom referencyjną aplikację PatternLens (dev)
```

- Szczegóły środowiska: patrz `technical_runbook.md` (dev + Vercel / Supabase).
- Kontrakty i polityki: zacznij od `00-CONTRACT.md` → `01-LANGUAGE.md` → `02-SAFETY.md` → `02/03-AI-CONTRACT.md` → `03-RUNTIME-MODES.md`.

---

## Research & Academic Collaboration

SILENCE.OBJECTS jest projektowany tak, aby **uczelnie, laboratoria i zespoły badawcze** mogły pracować z danymi behawioralnymi bez wchodzenia w obszar medycznej diagnozy czy oceny zdrowia.  
Kontrakty obiektów, eventów i profili zostały zdefiniowane pod kątem **sekwencji, rytmów, capacity i profili uwagi**, a nie kategorii klinicznych, co ułatwia budowanie projektów zgodnych z GDPR i EU AI Act (limited‑risk, no emotion / trait recognition).

Oferujemy współpracę z partnerami akademickimi w dwóch trybach:  
- korzystanie z open‑core (pakiety `@silence/*` + PatternLens) jako bazy do własnych badań,  
- wspólne projekty z dostępem do zanonimizowanych, strukturalnych danych i narzędzi PatternsLab, na podstawie jasno zdefiniowanego Academic Data Contract.

---

## Business & Monetization Overview (dla inwestorów)

Model biznesowy SILENCE.OBJECTS opiera się na **buyer‑based open‑core**: wszystko, co potrzebne twórcom i indywidualnym użytkownikom (kontrakty, pakiety `@silence/*`, referencyjna appka PatternLens), jest dostępne publicznie, natomiast wartość komercyjną budujemy w warstwie enterprise – SILENCE Engine, Portal, PatternsLab i pełne dashboardy instytucjonalne.

Monetyzacja odbywa się na trzech poziomach:

- **PatternLens PRO (B2C / prosumer)** – płatne plany rozszerzające liczbę interpretacji, alternatyw i funkcji archiwum, zgodnie z zasadami `04-MONETIZATION.md` i `04-PRODUCT-RULES.md` (więcej widoczności w czasie, nie „więcej opieki”).
- **PatternsLab & Portal (B2B / teams / orgs)** – licencje tenant‑based oraz usage‑based dla organizacji, które chcą pracować na sygnałach z pracy i współpracy (capacity, napięcia, rytmy) na własnych danych, z pełną obsługą compliance, audytu i multi‑tenant safety.
- **Enterprise Engine & Integrations** – projekty partnerskie, gdzie SILENCE Engine staje się warstwą analityczną pod istniejące systemy (HR, ops, wellbeing‑adjacent), z rozliczaniem per użycie (AI tokens, events) i dodatkowymi modułami jak predictive, intervention timing, analytics dashboard i billing.

Dla inwestorów oznacza to: **otwarty ekosystem developerów i researcherów**, który naturalnie prowadzi do adopcji enterprise Engine i Portalu tam, gdzie pojawia się potrzeba skalowania, governance i zgodności regulacyjnej.

---

## Kontakt i współpraca enterprise

- Strona: [https://patternlens.app](https://patternlens.app)  
- LinkedIn:  
  - Founder: [https://www.linkedin.com/in/ewatchorzewska/](https://www.linkedin.com/in/ewatchorzewska/)  
  - Company: [https://www.linkedin.com/company/silence-objects/](https://www.linkedin.com/company/silence-objects/)

Jeśli:

- chcesz użyć open‑core w swoim produkcie,
- potrzebujesz dostępu do Engine i Portalu w trybie enterprise,
- albo interesuje Cię wspólny research,

napisz do nas – chętnie porozmawiamy o współpracy.

---

**Licencja:** MIT (dla open‑core).  
**Status projektu:** aktywny rozwój, stabilny fundament open‑core, warstwa enterprise dostępna dla partnerów.
```

