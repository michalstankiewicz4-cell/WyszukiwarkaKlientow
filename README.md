# 🎯 Lead Hunter — Wyszukiwarka Klientów `v1.0.0`

**Lead Hunter** to zaawansowane narzędzie do wyszukiwania potencjalnych klientów na forach, serwisach społecznościowych i platformach ogłoszeniowych. Aplikacja działa jako pojedynczy plik HTML z opcjonalnym backendem (RSS proxy) — bez instalacji, bez zależności.

**Autor:** Michał Stankiewicz | 📞 +48 797 486 355 | ✉️ michalstankiewicz@onet.eu

---
<img width="1919" height="1199" alt="image" src="https://github.com/user-attachments/assets/41241f34-09e5-45e9-9d66-540a4808f36a" />

<img width="1919" height="947" alt="image" src="https://github.com/user-attachments/assets/19a30027-cdc9-4b3c-850c-7ad9b5ef3f11" />

## ✨ Funkcjonalności

### 🔍 Wyszukiwanie klientów
- Wpisz zapytanie opisujące potrzebę klienta (np. „szukam szkoleń z Excela")
- Aplikacja przeszukuje aktywne i ulubione źródła
- Wyniki z oceną relevancji (%), podglądem fragmentu i wyróżnionymi słowami kluczowymi
- **Szybkie zapytania** w sidebarze — generowane automatycznie z fraz przypiętych do ulubionych źródeł
- **Statystyki** na pasku: liczba wyników, przeszukanych źródeł, gorących leadów (≥ 88%) i zapisanych
- **Multi-query** — gdy pole wyszukiwania jest puste, automatycznie zbiera frazy z zestawów słów kluczowych podpiętych do aktywnych źródeł
- **Filtrowanie po subforach** — automatyczne dodawanie `site:` do zapytań dla źródeł z podlinkowanymi forami
- **Deduplikacja** wyników po URL
- Oznaczanie wyników już zapisanych jako leady
- Opcja **ukrywania zapisanych wyników** z widoku wyszukiwania i alertów

### 📊 Operacje masowe na wynikach
- Zaznaczanie pojedynczych wyników (checkbox) lub wszystkich naraz
- **Zbiorczy zapis** — zapisuje wszystkie zaznaczone wyniki jako leady jednym kliknięciem
- **Zbiorczy copy** — kopiuje linki zaznaczonych wyników do schowka
- Pływający pasek akcji na dole ekranu z podglądem liczby zaznaczonych

### 🔖 Zapisane leady
- Zapisywanie wyników wyszukiwania i alertów jako leadów z datą i źródłem
- **Ukrywanie wyników** — szybkie przeniesienie do leadów ze statusem „ukończony" (animowane usunięcie z listy)
- Filtrowanie: Wszystkie / Aktywne / Ukończone (z licznikami)
- Sortowanie: Data ↓/↑, Tytuł A-Z/Z-A, wg słowa kluczowego, wg źródła
- Usuwanie pojedynczych leadów lub czyszczenie całej listy
- Wyświetlanie ikony źródła, badge typu, daty zapisu, tagu słowa kluczowego i oceny relevancji

### 📂 Zarządzanie źródłami
- **Dwa widoki**: kafelki (grid) i lista (tabela) — oba z grupowaniem Aktywne / Nieaktywne
- **Sortowanie**: A-Z, Z-A, data dodania ↑/↓
- **System ulubionych** ⭐ — oznaczone źródła wyświetlane na górze
- **Klonowanie** źródła jednym kliknięciem (resetuje silnik, skrypty i logowanie)
- **Edycja inline** — nazwa, typ, ikona i URL edytowalne bezpośrednio na kafelku
- **Ustawienia źródła** (panel rozwijany ⚙):
  - Wymagane logowanie (toggle)
  - Przycisk do zarządzania danymi logowania
  - Wybór silnika wyszukiwania
  - Lista subfor/sekcji (dodawanie, usuwanie, edycja URL-i)
  - Opis tekstowy źródła
  - Picker zestawów słów kluczowych (link / unlink)
  - Picker skryptów z kolejnością wykonania (góra/dół)
- **Lampki statusu logowania**: 🟢 zalogowany / 🔴 wylogowany / 🟡 niewymagane
- **Import źródeł** — zaimportowane źródła oznaczone badge „📥 Do weryfikacji" z przyciskiem zatwierdzenia
- **Dynamiczne badge typów** — kolorowe etykiety z automatycznym dopasowaniem do motywu

### 🔎 Wyszukiwanie nowych źródeł (Google AI)
- Wbudowany kreator zapytań do Google AI — automatycznie buduje prompt na podstawie niszy
- Otwarcie Google AI Search w nowej karcie jednym kliknięciem
- Kopiowanie zapytania do schowka
- **Analizator odpowiedzi** — wklej odpowiedź z AI, a system automatycznie wyodrębni nazwy, URLe i opisy źródeł
- Bezpośrednie dodawanie znalezionych źródeł do bazy z wypełnionymi danymi

### 🔎 Silniki wyszukiwań
Każde źródło można podpiąć pod jeden z dostępnych silników:

| Silnik | Opis |
|--------|------|
| **Google CSE** | Wyszukiwanie przez Google Custom Search API (klucz API + CX) z filtrem `site:` per subforum |
| **Apify Web Scraper** | Wyszukiwanie przez Apify google-search-scraper (klucz API) z filtrem per domena |
| **Google Alerts** | Pobieranie RSS/Atom feeds (przez backend proxy lub CORS fallback) |
| **Brak** | Źródło bez przypisanego silnika |

Strona **Silniki** zawiera karty z instrukcją konfiguracji krok po kroku, wskaźnik statusu klucza API (zielona/szara kropka) oraz listę podpiętych źródeł.

### 🏷️ Typy źródeł
- **7 wbudowanych typów**: Forum, Social media, Portal, Ogłoszenia, IT, Biznes, Wyszukiwarka
- Tworzenie **własnych typów** z niestandardową nazwą i kolorem
- Edycja nazw i kolorów istniejących typów (w tym wbudowanych)
- Usuwanie własnych typów (wbudowane nie mogą być usunięte)
- Dynamiczne generowanie CSS badge'ów z wariantami jasny/ciemny motyw

### 📜 Skrypty
- Skrypty przypisywane **do źródeł** (wiele skryptów na źródło, z kolejnością wykonania)
- Obsługiwane języki: **JavaScript, Python, Bash, cURL, PHP, Inny**
- Opis i kod z rozwijalnym podglądem (monospace, licznik linii)
- Pełne CRUD: dodaj, edytuj, usuń
- **Przełącznik widoku**: według skryptów (karty) lub według źródeł (grupowanie wg przypisanych skryptów)

### 🏷️ Frazy i słowa kluczowe
- Zestawy fraz grupowane w karty (np. „Szkolenia", „IT/Dev", „Marketing")
- Każdy zestaw podłączony do wybranych subforów źródeł (z wyborem konkretnego subforum per źródło)
- Dwukierunkowe linkowanie — z poziomu zestawu lub z ustawień źródła
- **Auto-synchronizacja** — frazy z podpiętych zestawów automatycznie mergowane do pola keywords źródła
- Wyświetlanie max 6 fraz na karcie z licznikiem „+N więcej"

### 🔐 Loginy do źródeł
- Login i hasło per źródło z możliwością ustawienia domyślnych danych logowania
- Przechowywanie w localStorage lub **wyłącznie w RAM** (wg ustawień Security — dane znikają po zamknięciu karty)
- **Grupowanie widoku**: wg statusu (zalogowany/niezalogowany), wg aktywności źródła, bez grupowania
- Tabela z ikoną, nazwą, loginem, zamaskowanym hasłem, statusem i akcjami (edycja/czyszczenie)
- Przełącznik widoczności hasła (👁)
- Badge w sidebarze z liczbą skonfigurowanych danych logowania

### 💾 Import / Export (backup)
Pełny backup w pliku `.db.json` (`klienthunter-YYYY-MM-DD.db.json`):
- ✅ Źródła (z przypisanymi skryptami i silnikami)
- ✅ Zestawy fraz i słów kluczowych (z remapowaniem ID źródeł)
- ✅ Skrypty (z kodem)
- ✅ Zapisane leady
- ✅ Ustawienia (harmonogram, bezpieczeństwo)
- ✅ Dane wrażliwe: loginy do źródeł, login domyślny, klucz Google API, klucz Apify (opcjonalnie zaszyfrowane AES-GCM + PBKDF2)
- ✅ Google CX (zawsze plain — niesensytywne)

Import z walidacją pochodzenia pliku (`KlientHunter`), podglądem zawartości, odszyfrowywaniem i remapowaniem ID.

### 🔐 Bezpieczeństwo
Panel **Security** w ustawieniach (topbar ⚙) umożliwia konfigurację:

| Opcja | Opis |
|-------|------|
| **Przechowywanie haseł** | `localStorage` (domyślnie, trwałe) lub `RAM` (dane znikają po zamknięciu karty) |
| **Szyfrowanie eksportu** | Gdy włączone — hasła i klucze API szyfrowane AES-GCM + PBKDF2 (100 000 iteracji, klucz 256-bit) przy eksporcie |
| **Czyszczenie bazy** | Przycisk usuwający wszystkie dane z localStorage (z potwierdzeniem) |

### ⏱️ Automatyczne wyszukiwanie (harmonogram)
- Przycisk ⏱ w topbarze — zielony z pulsującą kropką gdy aktywny
- Konfiguracja: co godzinę / co 2h / co 4h / co 8h / codziennie o wybranej godzinie
- Własne zapytanie lub użycie zapytania z pola głównego
- **Auto-dodawanie leadów** — opcjonalny toggle, automatycznie zapisuje nowe (niewidziane) wyniki i alerty jako leady
- **Uruchom teraz** — ręczne wywołanie automatycznego wyszukiwania
- **Powiadomienie systemowe** (Browser Notification API) z podsumowaniem wyników
- **Toast in-app** z podsumowaniem i przyciskiem „Pokaż wyniki"
- Wyświetlanie statusu: ostatnie uruchomienie, następne uruchomienie, liczba ulubionych źródeł
- Harmonogram zapisywany w localStorage; wznawia się po odświeżeniu strony
- Inteligentna obsługa throttlingu przeglądarki — ponowne sprawdzenie przy powrocie na kartę

### 📡 Alerty RSS
- Automatyczne sprawdzanie alertów podczas wyszukiwania (gdy tryb online włączony)
- Pobieranie RSS/Atom przez backend proxy z kaskadowym fallbackiem (własny serwer → corsproxy.io → allorigins.win)
- Parsowanie RSS i Atom (w tym namespace `origLink`)
- Wyświetlanie alertów z akcjami: zapisz / ukryj / kopiuj link
- Zaznaczanie i masowe operacje na alertach

### 👤 Tryb użytkownika / administratora
- Przełącznik w topbarze: 👤 Użytkownik / ⚙️ Administrator
- **Użytkownik** — widzi tylko Szukaj klientów i Zapisane leady
- **Administrator** — widzi wszystkie 7 zakładek (źródła, frazy, silniki, skrypty, loginy)
- Wybór zapamiętywany w localStorage

### ⚙️ Ustawienia (panel topbar)
- **Tryb online / offline** — toggle dla funkcji serwerowych (alerty, Apify)
- **Ukrywanie zapisanych** — checkbox do ukrywania już zapisanych wyników z wyszukiwania i alertów
- **Zarządzanie typami źródeł** — pełne CRUD dla etykiet i kolorów typów
- **Security** — tryb przechowywania + szyfrowanie eksportu
- **Domyślne dane logowania** — e-mail i hasło z togglem widoczności

### 🌙 Motyw jasny / ciemny
- Przełącznik motywu w topbarze (☀ / 🌙)
- CSS Custom Properties z pełnym zestawem zmiennych kolorów dla obu motywów
- Preferencja zapisywana w localStorage

### ℹ️ Panel informacyjny
- Dane kontaktowe autora (telefon klikalny, mail klikalny)
- Sekcja donacji: IBAN z kopią do schowka, BLIK, link do Patronite
- Wersja aplikacji widoczna w sidebarze i w panelu

---

## 🛠️ Technologie

| Warstwa | Technologia |
|---------|-------------|
| Frontend | Vanilla HTML5, CSS3, JavaScript ES6+ |
| Styling | CSS Custom Properties, Flexbox, Grid |
| Fonty | Outfit (UI), JetBrains Mono (kod/dane) |
| Storage | localStorage / RAM (bez backendu) |
| Szyfrowanie | AES-GCM + PBKDF2 (Web Crypto API) |
| Powiadomienia | Browser Notification API |
| RSS Proxy | Express.js (opcjonalny backend — `server.js`) |
| Hosting | GitHub Pages (frontend) + Render (backend proxy) |
| Architektura | Single-file (`index.html`) |

---

## 🚀 Uruchomienie

```bash
git clone https://github.com/michalstankiewicz4-cell/WyszukiwarkaKlientow.git
cd WyszukiwarkaKlientow
```

Otwórz `index.html` w dowolnej nowoczesnej przeglądarce. Nie wymagana instalacja ani serwer.

Opcjonalnie — uruchom backend (RSS proxy) dla Google Alerts:
```bash
npm install
node server.js
```

---

## 📋 Jak używać

### 1. Konfiguracja źródeł
1. Przełącz się w tryb Administratora (przycisk 👤/⚙️ w topbarze)
2. Przejdź do **Zarządzaj źródłami**
3. Dodaj źródła przyciskiem **+ Dodaj źródło** (nazwa, typ, link, ikona) lub użyj **🔍 Szukaj źródeł** z AI
4. Włącz interesujące Cię źródła (toggle) i oznacz najważniejsze jako ulubione ⭐
5. Kliknij przycisk edycji ✏️ na kafelku, by zmienić nazwę, typ, ikonę lub URL
6. W ustawieniach źródła (⚙) skonfiguruj podfora, silnik, dane logowania i przypisz skrypty

### 2. Konfiguracja silników
1. Przejdź do **Silniki wyszukiwań**
2. Kliknij **🔑 Konfiguruj** przy karcie wybranego silnika (Google CSE lub Apify)
3. Wpisz klucz API (i CX dla Google)
4. Przypisz silnik do źródeł w ustawieniach źródła

### 3. Frazy i słowa kluczowe
1. Przejdź do **Frazy i słowa kluczowe**
2. Utwórz zestaw i wpisz frazy (jedna na linię)
3. Podłącz zestaw do wybranych subforów źródeł

### 4. Skrypty
1. Przejdź do **Skrypty**
2. Kliknij **+ Dodaj skrypt**, wybierz język i wklej kod
3. W ustawieniach źródła przypisz skrypty i ustal ich kolejność

### 5. Automatyzacja
1. Kliknij ⏱ w topbarze
2. Włącz harmonogram i ustaw częstotliwość
3. Opcjonalnie włącz „Auto-dodaj nowe do leadów"
4. Przy pierwszym włączeniu przeglądarka poprosi o zgodę na powiadomienia

### 6. Backup i bezpieczeństwo
- **Eksport**: przycisk „Eksport" → plik `.db.json` z opcjonalnym szyfrowaniem AES
- **Import**: przycisk „Import" → wybierz plik, podaj hasło (jeśli zaszyfrowany), potwierdź co zaimportować

---

## 🎯 Przykłady zapytań

| Branża | Przykładowe zapytanie |
|--------|----------------------|
| IT | szukam programisty PHP freelancer |
| Marketing | polecacie agencję marketingową / SEO |
| Szkolenia | szukam szkoleń z Excela dla firmy |
| B2B | szukam dostawcy artykułów biurowych |
| Finanse | szukam księgowej rachunkowość |
| Prawo | szukam prawnika prawo pracy |

---

## 📈 Roadmapa

- [ ] Eksport leadów do CSV / Excel
- [ ] Pipeline leadów (Kanban: Nowy → Kontakt → Zamknięty)
- [ ] Tagi i notatki przy leadach
- [ ] Historia wyszukiwań
- [ ] Dashboard ze statystykami (wykres leadów w czasie)
- [ ] Wiele profili użytkownika (pełny snapshot konfiguracji)
- [ ] Integracja z CRM (HubSpot, Pipedrive)
- [ ] Wersja wielostanowiskowa z backendem
- [ ] Wielojęzyczność (PL / EN)

---

## ❤️ Wesprzyj projekt

Aplikacja jest darmowa. Jeśli chcesz wesprzeć autora:

- **BLIK**: `797 486 355`
- **Przelew**: Michał Stankiewicz, PKO BP
  `PL55 1020 1097 0000 7902 0226 5353`
  Tytuł: *„Wyszukiwarka klientów"*
- **Patronite**: [patronite.pl/michalstankiewicz](https://patronite.pl/michalstankiewicz)

---

*Lead Hunter v1.0.0 — single-file, no dependencies* 🎯
