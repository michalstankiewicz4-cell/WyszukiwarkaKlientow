# 🎯 Lead Hunter — Wyszukiwarka Klientów `v0.0.1-alfa`

**Lead Hunter** to narzędzie do wyszukiwania potencjalnych klientów na forach, serwisach społecznościowych i platformach ogłoszeniowych. Aplikacja działa jako pojedynczy plik HTML — bez serwera, bez instalacji.

**Autor:** Michał Stankiewicz | 📞 +48 797 486 355 | ✉️ michalstankiewicz@onet.eu

---
<img width="1919" height="1199" alt="image" src="https://github.com/user-attachments/assets/41241f34-09e5-45e9-9d66-540a4808f36a" />

<img width="1919" height="947" alt="image" src="https://github.com/user-attachments/assets/19a30027-cdc9-4b3c-850c-7ad9b5ef3f11" />

## ✨ Funkcjonalności

### 🔍 Wyszukiwanie klientów
- Wpisz zapytanie opisujące potrzebę klienta (np. „szukam szkoleń z Excela")
- Aplikacja przeszukuje aktywne i ulubione źródła
- Wyniki z oceną relevancji (%), podglądem fragmentu i wyróżnionymi słowami kluczowymi
- Szybkie zapytania w sidebarze (Szkolenia, IT/Dev, Marketing, Księgowość…)
- Statystyki: liczba wyników, źródeł, gorących leadów

### 📂 Zarządzanie źródłami
- **Dwa widoki**: kafelki i lista — oba z grupowaniem Aktywne / Nieaktywne
- **Sortowanie**: A-Z, Z-A, data dodania
- **System ulubionych** ⭐ — oznaczone źródła wyświetlane na górze
- **Klonowanie** źródła jednym kliknięciem (domyślny silnik: Brak)
- **Edycja inline** — nazwa, typ, ikona i URL edytowalne bezpośrednio na kafelku
- **Ustawienia źródła** — podfora, opis, logowanie, przypisane skrypty (wiele, z kolejnością)

### 🔎 Silniki wyszukiwań
Każde źródło można podpiąć pod jeden z dostępnych silników:

| Silnik | Opis |
|--------|------|
| **Google CSE** | Wyszukiwanie przez Google Custom Search API |
| **Google CSE (site:)** | Google CSE ograniczone do domeny źródła |
| **Reddit** | Publiczne API Reddit (bez klucza) |
| **Brak** | Źródło bez przypisanego silnika |

Konfiguracja Google CSE: zakładka **Silniki → 🔑 Konfiguruj** (klucz API + CX).

### 📜 Skrypty
- Skrypty przypisywane **do źródeł** (wiele skryptów na źródło, z kolejnością)
- Obsługiwane języki: **JavaScript, Python, Bash, cURL, PHP, Inny**
- Opis i kod z collapsible podglądem (monospace)
- Pełne CRUD: dodaj, edytuj, usuń
- **Przełącznik widoku**: według skryptów lub według źródeł, do których są podpięte

### 🏷️ Frazy i słowa kluczowe
- Zestawy fraz grupowane w karty (np. „Szkolenia", „IT/Dev", „Marketing")
- Każdy zestaw podłączony do wybranych podlinków źródeł

### 💾 Import / Export (backup)
Pełny backup w pliku `.db.json` (`klienthunter-YYYY-MM-DD.db.json`):
- ✅ Źródła (z przypisanymi skryptami)
- ✅ Zestawy fraz i słów kluczowych
- ✅ Skrypty (z kodem)
- ✅ Zapisane leady
- ✅ Ustawienia (harmonogram, bezpieczeństwo)
- ✅ Dane wrażliwe: loginy, klucz Google API (opcjonalnie zaszyfrowane — patrz Security)
- ✅ Google CX (zawsze plain — niesensytywne)

Import z podglądem zawartości; możliwość **dołączenia** lub **zastąpienia** danych.

**Pliki demo:**
- [`NoPassklienthunter-2026-03-01.db.json`](NoPassklienthunter-2026-03-01.db.json) — eksport bez hasła
- [`Pass123klienthunter-2026-03-01.db.json`](Pass123klienthunter-2026-03-01.db.json) — eksport z hasłem `123`

### 🔐 Bezpieczeństwo
Panel **Security** (topbar) umożliwia konfigurację:

| Opcja | Opis |
|-------|------|
| **Przechowywanie haseł** | `localStorage` (domyślnie) lub `RAM` (dane znikają po zamknięciu karty) |
| **Szyfrowanie eksportu** | Gdy włączone — hasła i klucz Google API szyfrowane AES-GCM + PBKDF2 przy eksporcie |

### 🔐 Loginy do źródeł
- Przechowywanie w localStorage lub RAM (wg ustawień Security)
- Lampki statusu przy każdym źródle: 🟢 zalogowany / 🔴 wylogowany / 🟡 niewymagane

### ⏱️ Automatyczne wyszukiwanie (harmonogram)
- Przycisk ⏱ w topbarze — zielony z pulsującą kropką gdy aktywny
- Konfiguracja: co godzinę / co 2h / co 4h / co 8h / codziennie o wybranej godzinie
- **Powiadomienie systemowe** (Browser Notification API) z podsumowaniem wyników
- Harmonogram zapisywany w localStorage; wznawia się po odświeżeniu strony

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
| Architektura | Single-file (`index.html`) |

---

## 🚀 Uruchomienie

```bash
git clone https://github.com/michalstankiewicz4-cell/WyszukiwarkaKlientow.git
cd WyszukiwarkaKlientow
```

Otwórz `index.html` w dowolnej nowoczesnej przeglądarce. Nie wymagana instalacja ani serwer.

---

## 📋 Jak używać

### 1. Konfiguracja źródeł
1. Przejdź do **Zarządzaj źródłami**
2. Dodaj źródła przyciskiem **+ Dodaj źródło** (podstawowe dane: nazwa, typ, link, ikona)
3. Włącz interesujące Cię źródła (toggle) i oznacz najważniejsze jako ulubione ⭐
4. Kliknij przycisk edycji ✏️ na kafelku, by zmienić nazwę, typ, ikonę lub URL
5. W ustawieniach źródła (⚙) skonfiguruj podfora, silnik i przypisz skrypty

### 2. Konfiguracja silnika Google CSE
1. Przejdź do **Silniki wyszukiwań**
2. Kliknij **🔑 Konfiguruj** przy karcie Google CSE
3. Wpisz klucz API i identyfikator CX

### 3. Frazy i słowa kluczowe
1. Przejdź do **Frazy i słowa kluczowe**
2. Utwórz zestaw i wpisz frazy oddzielone przecinkami
3. Podłącz zestaw do wybranych podlinków źródeł

### 4. Skrypty
1. Przejdź do **Skrypty**
2. Kliknij **+ Dodaj skrypt**, wybierz język i wklej kod
3. W ustawieniach źródła przypisz skrypty i ustal ich kolejność

### 5. Automatyzacja
1. Kliknij ⏱ w topbarze
2. Włącz harmonogram i ustaw częstotliwość
3. Przy pierwszym włączeniu przeglądarka poprosi o zgodę na powiadomienia

### 6. Backup i bezpieczeństwo
- **Eksport**: przycisk „Eksport" w Zarządzaj źródłami → plik `.db.json`
  - Gdy **Szyfrowanie eksportu** włączone w Security → hasła i klucz API zaszyfrowane
- **Import**: przycisk „Import" → wybierz plik, potwierdź co zaimportować

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

---

## ❤️ Wesprzyj projekt

Aplikacja jest darmowa. Jeśli chcesz wesprzeć autora:

- **BLIK**: `797 486 355`
- **Przelew**: Michał Stankiewicz, PKO BP
  `PL55 1020 1097 0000 7902 0226 5353`
  Tytuł: *„Wyszukiwarka klientów"*
- **Patronite**: [patronite.pl/michalstankiewicz](https://patronite.pl/michalstankiewicz)

---

*Lead Hunter v0.0.1-alfa — single-file, no backend, no dependencies* 🎯
