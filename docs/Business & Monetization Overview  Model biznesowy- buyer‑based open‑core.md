
# Business \& Monetization Overview

Model biznesowy: **buyer‑based open‑core**

SILENCE.OBJECTS operuje w modelu buyer‑based open‑core – tym samym, który stoi za sukcesem GitLab, Redis, Elastic i innych dojrzałych projektów open‑source. Cała warstwa fundamentalna (kontrakty, pakiety `@silence/*`, referencyjna aplikacja PatternLens) jest publicznie dostępna na licencji MIT.[^1]

To jest świadoma decyzja strategiczna:

- buduje ekosystem developerów i researcherów wokół spójnego frameworka,
- ustanawia SILENCE.OBJECTS jako **de facto standard** dla strukturalnej analizy wzorców behawioralnych,
- tworzy naturalny lejek konwersji do płatnych warstw enterprise, kiedy pojawia się potrzeba skali, governance i compliance.[^2][^1]

Wartość komercyjna powstaje tam, gdzie kończą się możliwości „samodzielnego hackowania” na open‑core, a zaczyna się realna odpowiedzialność za ludzi, organizacje i regulatorów – czyli w warstwie enterprise.[^1]

***

## Architektura wartości: gdzie zarabiamy

Warstwa open‑core (MIT):

- kontrakty typów i eventów (`@silence/contracts`),
- moduły analizy wzorców (`@silence/behavioral-sequences`, `@silence/rhythmic-patterns`, `@silence/cognitive-load`, `@silence/capacity-recovery`, `@silence/attention-profiles`),
- guardrails językowe S11 (`@silence/language`, `@silence/validator`),
- design system (`@silence/ui`),
- referencyjna aplikacja PatternLens jako kliencka implementacja protokołów.[^3][^4][^1]

Warstwa enterprise (komercyjna, closed):

- **SILENCE Engine** – zintegrowana, produkcyjna wersja frameworka z pełnym wsparciem AI, predykcją i orkiestracją (`ee/@silence/behavioral-engine`, `ee/@silence/ai`, `ee/@silence/predictive`, `ee/@silence/safety`, `ee/@silence/orchestrator`).[^1]
- **Portal** – konsola zarządcza dla organizacji (monitoring, billing, compliance, audyt).[^5][^1]
- **PatternsLab** – platforma badawczo‑analityczna dla instytucji i zespołów B2B (widoki zagregowane, analizy trendów, governance danych).[^1]

To rozdzielenie kodu jest wymuszone przez architekturę monorepo: katalog `packages/` to open‑core, katalog `ee/` to closed modules – usunięcie `ee/` nie łamie kompilacji open‑core (ADR004).[^1]

***

## Trzy poziomy monetyzacji

### 1. PatternLens PRO (B2C / prosumer)

PatternLens to nasza flagowa aplikacja referencyjna – voice‑first, offline‑first, z interfejsem projektowanym dla neuroatypowych użytkowników (ciemny tryb, monospace, brak bodźców „gamifikacyjnych”). Wersja FREE jest w pełni funkcjonalna i buduje zaufanie: pełny 4‑fazowy raport (Context, Tension, Meaning, Function), safety, archiwum w ograniczonym horyzoncie.[^6][^2][^3]

Wersja PRO oferuje m.in.:

- dłuższy horyzont czasowy – archiwum interpretacji sięgające do 24 miesięcy,
- pełną historię „Ghost Patterns” – śledzenie ewolucji wzorców w czasie na poziomie strukturalnych wskaźników (cykle, napięcia, capacity),
- rozszerzone możliwości eksportu danych i raportów – do własnych analiz lub do współpracy z zewnętrznym coach’em / terapeutą (bez wbudowanej funkcji terapii).[^6][^1]

**Model cenowy:**

- subskrypcja miesięczna: **49 PLN** (poziom prosumer, porównywalny z narzędziami typu „productivity+AI”),[^7]
- opcjonalne pakiety AI credits dla power‑userów (dodatkowe interpretacje, alternatywy, dłuższe raporty).

Zasada przewodnia dla PatternLens PRO: **„więcej widoczności w czasie, nie więcej opieki”** – produkt nie udaje terapii, nie składa obietnic poprawy samopoczucia, a jedynie zwiększa rozdzielczość wglądu w własne mechanizmy poprzez strukturę i historię wzorców.[^2][^3]

***

### 2. PatternsLab \& Portal (B2B / teams / orgs)

PatternsLab to platforma dla zespołów, organizacji i instytucji, które chcą pracować na zbiorczych sygnałach z pracy i współpracy – w sposób zgodny z EU AI Act (limited‑risk) i GDPR.[^5][^1]

Oferuje:

- widoki zagregowane (capacity, napięcia, rytmy) z anonimizacją (np. N ≥ 3 lub wyższe progi, zgodnie z polityką instytucji),
- analizę trendów zespołowych, bez możliwości „rankingowania” jednostek czy wnioskowania o stanie zdrowia konkretnych osób,
- pełną obsługę compliance: RLS (row‑level security), audit trail, role‑based access, deklaracje safety profile, automatyczne generowanie fragmentów Technical File pod EU AI Act,[^5][^1]
- integracje z systemami HR / ops (kalendarium, ticketing, narzędzia komunikacyjne) – w modelu enterprise.

Portal jest warstwą zarządczą:

- metryki użycia oraz koszty wywołań AI (budżety, quota, killswitch),
- przegląd zgód i konfiguracji privacy / safety,
- zarządzanie tenantami, rolami i poziomem szczegółowości dostępnych danych.[^5][^1]

**Model cenowy:**

- licencje tenant‑based:
    - stała opłata miesięczna za organizację (zależna od liczby zespołów / rozmiaru tenant’a),
- komponent usage‑based:
    - wolumen eventów (np. liczba zapisanych Objectów, generowanych interpretacji),
    - liczba aktywnych użytkowników miesięcznie (aktywni uczestnicy).[^7]

To daje klientowi przewidywalność (stała baza) i elastyczność (rośnie, gdy rośnie adopcja), a nam – skalowalność przychodów bez agresywnych podwyżek cen.

***

### 3. Enterprise Engine \& Integrations

Najwyższa warstwa monetyzacji to wdrożenia partnerskie, w których SILENCE Engine działa jako warstwa analityczna pod istniejące systemy klienta.

Przykładowe scenariusze:

- **HR tech** – analiza wzorców obciążenia i ryzyka wypalenia w zespołach, oparta na danych behawioralnych (eventy pracy i współpracy), z pełną zgodnością z EU AI Act i politykami HR (brak klasyfikacji klinicznych, brak „flagowania” osób).[^2][^1]
- **platformy wellbeing‑adjacent** – dostarczenie strukturalnych wskaźników capacity, napięć i rytmów jako uzupełnienie istniejących metryk (bez wchodzenia w diagnozy czy „scoring zdrowia”).[^1]
- **narzędzia badawcze** – dostęp do anonimizowanych, strukturalnych danych (sekwencje, rytmy, wskaźniki capacity, profile uwagi) na warunkach Academic Data Contract, z jasnym rozdziałem ról i odpowiedzialności regulacyjnej.[^1]

**Rozliczanie:**

- **per użycie:**
    - tokeny AI (wywołania modułu `silenceai` / LLM),
    - liczba przetworzonych eventów / interpretacji / cykli analitycznych,[^7][^1]
- **roczna opłata licencyjna:**
    - za dostęp do closed modules (`silencepredictive`, `silenceintervention-timing`, `silenceanalytics-dashboard`, `silencebilling`, `silenceaudit`, itp.).[^1]

Tak zdefiniowany model pozwala sprzedawać Engine zarówno jako „wtyczkę analityczną” do istniejących systemów, jak i jako pełnoprawną platformę dla organizacji.

***

## Dźwignie wzrostu i przewagi konkurencyjne

Z perspektywy inwestora kluczowe elementy modelu to:

1. **Otwarty ekosystem jako lejek PLG**

Im więcej developerów i researcherów używa open‑core (pakiety `@silence/*` + referencyjna PatternLens), tym większa jest baza instalacji i eksperymentów, z których naturalnie wyrastają projekty enterprise. To jest podręcznikowy PLG (product‑led growth): wejście jest darmowe, a płatne stają się dopiero potrzeby, których nie da się „zahackować” w zespole 1–2 osób.[^1]

2. **Zgodność regulacyjna jako moat**

SILENCE.OBJECTS od fundamentów jest projektowany pod EU AI Act (limited‑risk), GDPR i Data Act. W kontrakcie ramowym (00‑CONTRACT) i dokumentach S11 jasno deklarujemy:

- brak funkcji diagnostycznych,
- brak pattern‑detection w sensie klinicznym,
- brak rekomendacji i „porad” – tylko strukturalne hipotezy.[^3][^2]

Dla klientów instytucjonalnych to nie jest „miły dodatek”, tylko warunek startu. Nasza przewaga polega na tym, że te zasady są wbudowane w kontrakty, język i architekturę, nie „doczepione” po fakcie.[^5][^1]

3. **Dane strukturalne zamiast surowych treści**

Nie przechowujemy surowych treści użytkowników jako głównego zasobu – zamiast tego operujemy na wyabstrahowanych wzorcach: sekwencjach, rytmach, napięciach, sygnałach capacity i profilach uwagi. To:[^1]

- radykalnie obniża ryzyko prywatnościowe,
- ułatwia spełnienie wymogów privacy‑by‑design,
- zmniejsza koszt compliance (mniej danych „high‑risk”, mniej restrykcji co do przechowywania i transferu).

4. **Model hybrydowy (subskrypcja + usage‑based)**

Połączenie subskrypcji (PatternLens PRO, licencje tenant‑based) z komponentem usage‑based (AI tokens, eventy, aktywni użytkownicy) daje:

- powtarzalny MRR,
- naturalny wzrost przychodów wraz z adopcją,
- brak konieczności „windowania” cen co rok.[^7]

To model znany z nowoczesnych AI‑SaaS (OpenAI, Vercel, Supabase) i dobrze rozumiany przez rynek.

5. **Wyraźne granice między FREE a PRO/enterprise**

W warstwie B2C:

- FREE jest naprawdę używalne – pełny 4‑fazowy raport, safety, podstawowe archiwum.[^6]
- PRO zwiększa zakres widoczności (czas, głębokość historii, narzędzia eksportu) i możliwości pracy z własnymi danymi, ale nie „przejmuje kontroli” nad użytkownikiem, nie stosuje dark patterns.[^3][^7]

W warstwie B2B/enterprise:

- jasny podział funkcjonalny między PatternsLab, Portal i Engine (opisany w 04‑PRODUCT‑RULES),
- brak ukrytych paywalli w funkcjach bezpieczeństwa i zgodności (safety / S11 nie są „dodatkiem PRO”, tylko fundamentem).[^8][^2]

***

## Podsumowanie dla inwestora

SILENCE.OBJECTS to nie kolejna „mindfulness app”, ale infrastruktura dla ery neuroatypowości i przeciążenia informacyjnego: framework i Engine do nieklinicznej, strukturalnej analizy wzorców zachowania.[^2][^1]

Model open‑core zapewnia:

- **niski CAC** – społeczność developerów i researcherów buduje rozwiązania na naszym ekosystemie, co generuje popyt na warstwę enterprise,
- **wysokie bariery wejścia** – zgodność regulacyjna i sterylność językowa S11 to lata pracy w kontraktach, języku i narzędziach (G1/G2), trudne do skopiowania „w kilka sprintów”,[^3][^5]
- **skalowalność przychodów** – trzy poziomy monetyzacji (PatternLens PRO, PatternsLab/Portal, Enterprise Engine \& Integrations) z wyraźnymi ścieżkami upsellingu.[^7][^1]

Rynek przesuwa się od „wellbeing apps” do systemów, które potrafią pokazać **strukturę** pracy, napięć i capacity bez wchodzenia w obszar medycyny czy terapii. SILENCE.OBJECTS jest zbudowane dokładnie na tę zmianę – z udokumentowanymi kontraktami, działającym open‑core i planem monetyzacji, który nie wymaga łamania zaufania użytkownika.

Szczegółowe zasady monetyzacji rozwijają:

- `04-MONETIZATION.md` – ramy modelu FREE / PRO / ENTERPRISE,[^7]
- `04-PRODUCT-RULES.md` – granice funkcjonalne między wersjami,[^8]
- `docs/strategy/MONETYZACJA_PATTERNLENS_2026.md` – szczegółowa strategia cenowa dla zespołu i inwestorów (work‑in‑progress, rozszerzany na podstawie danych z rynku).

