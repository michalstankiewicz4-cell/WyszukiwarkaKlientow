# 🎯 Lead Hunter — Wyszukiwarka Klientów `v1.0.0-alfa`

**Lead Hunter** to narzędzie do wyszukiwania potencjalnych klientów na forach, serwisach społecznościowych i platformach ogłoszeniowych. Aplikacja działa jako pojedynczy plik HTML — bez serwera, bez instalacji.

**Autor:** Michał Stankiewicz | 📞 +48 797 486 355 | ✉️ michalstankiewicz@onet.eu

---

## ✨ Funkcjonalności

### 🔍 Wyszukiwanie klientów
- Wpisz zapytanie opisujące potrzebę klienta (np. „szukam szkoleń z Excela")
- Aplikacja przeszukuje aktywne i ulubione źródła
- Wyniki z oceną relevancji (%), podglądem fragmentu i wyróżnionymi słowami kluczowymi
- Szybkie zapytania w sidebarze (Szkolenia, IT/Dev, Marketing, Księgowość…)
- Statystyki: liczba wyników, źródeł, gorących leadów

### 📂 Zarządzanie źródłami
- **15+ predefiniowanych źródeł** — Elektroda.pl, 4programmers.net, LinkedIn, OLX, Reddit i inne
- **Dwa widoki**: kafelki i lista — oba z grupowaniem Aktywne / Nieaktywne
- **Sortowanie**: A-Z, Z-A, data dodania
- **System ulubionych** ⭐ — oznaczone źródła wyświetlane na górze
- **Klonowanie** źródła jednym kliknięciem (przycisk ⧉)
- **Opis źródła** (max 255 znaków) — edytowalny w ustawieniach, widoczny jako tooltip na kafelku
- **Szukaj źródeł** — konstruktor zapytania Google AI do odkrywania nowych serwisów z parserem wyników

### 💾 Import / Export (backup)
Pełny backup w jednym pliku JSON (`klienthunter-backup-YYYY-MM-DD.json`):
- ✅ Źródła
- ✅ Zestawy fraz i słów kluczowych
- ✅ Loginy do źródeł
- ✅ Skrypty
- Import z podglądem zawartości; możliwość **dołączenia** lub **zastąpienia** źródeł

### 🔎 Silniki wyszukiwań
Zakładka grupująca źródła według metody wyszukiwania:
- **Wewnętrzna wyszukiwarka** — natywne wyszukiwanie serwisu
- **Google** — wyszukiwanie przez Google
- **Google (site:)** — Google ograniczone do domeny
- **Bing** — silnik Bing
- **DuckDuckGo** — silnik DuckDuckGo
- **API** — niestandardowe endpointy API z polem URL i kluczem API (szyfrowane pole)

### 📜 Skrypty
Dedykowana zakładka dla skryptów wspomagających niestandardowe wyszukiwania:
- Każdy skrypt powiązany z wybranym silnikiem wyszukiwania
- Obsługiwane języki: **JavaScript, Python, Bash, cURL, PHP, Inny**
- Opis i kod skryptu z collapsible podglądem (monospace, zawijanie linii)
- Pełne CRUD: dodaj, edytuj, usuń

### 🏷️ Frazy i słowa kluczowe
- Zestawy fraz grupowane w karty (np. „Szkolenia", „IT/Dev", „Marketing")
- Każdy zestaw podłączony do wybranych podlinków źródeł
- Synchronizacja fraz do `source.keywords` przy starcie i po każdej zmianie
- Przypisanie zestawów podczas dodawania nowego źródła

### ⏱️ Automatyczne wyszukiwanie (harmonogram)
- Przycisk ⏱ w topbarze — zielony z pulsującą kropką gdy aktywny
- Konfiguracja: co godzinę / co 2h / co 4h / co 8h / **codziennie o wybranej godzinie**
- Wyszukiwanie na ulubionych źródłach
- **Powiadomienie systemowe** (Browser Notification API) z podsumowaniem wyników
- **Toast in-app** (prawy dół) z liczbą wyników, gorących leadów i przyciskiem „Zobacz wyniki"
- Harmonogram zapisywany w localStorage; wznawia się po odświeżeniu strony

### 🔐 Loginy do źródeł
- Lampki statusu przy każdym źródle: 🟢 zalogowany / 🔴 wylogowany / 🟡 niewymagane
- Grupowanie wg statusu lub wg nazwy
- Per-user storage — dane logowania powiązane z kontem użytkownika
- Bezpieczne przechowywanie w localStorage

### 🌙 Tryb ciemny / jasny
- Przełącznik 🌙 / ☀️ w topbarze
- Pełne ciemne CSS Custom Properties dla wszystkich komponentów
- Preferencja zapisywana w localStorage

### ℹ️ Panel informacyjny
- Pulsujący przycisk ℹ w topbarze
- Dane kontaktowe autora (telefon klikalny, mail klikalny)
- Sekcja donacji: IBAN z kopią do schowka, BLIK, link do Patronite
- Wersja aplikacji widoczna w sidebarze i w panelu

---

## 🛠️ Technologie

| Warstwa | Technologia |
|---|---|
| Frontend | Vanilla HTML5, CSS3, JavaScript ES6+ |
| Styling | CSS Custom Properties, Flexbox, Grid |
| Fonty | Outfit (UI), JetBrains Mono (kod/dane) |
| Storage | localStorage (bez backendu) |
| Powiadomienia | Browser Notification API |
| Architektura | Single-file (`wyszukiwarka.html`) |

---

## 🚀 Uruchomienie

```bash
git clone https://github.com/michalstankiewicz4-cell/WyszukiwarkaKlientow.git
cd WyszukiwarkaKlientow
```

Otwórz `wyszukiwarka.html` w dowolnej nowoczesnej przeglądarce. Nie wymagana instalacja ani serwer.

---

## 📋 Jak używać

### 1. Konfiguracja źródeł
1. Przejdź do **Zarządzaj źródłami**
2. Włącz interesujące Cię źródła (toggle)
3. Oznacz najważniejsze jako ulubione ⭐
4. Ustaw silnik wyszukiwania i podfora w ustawieniach źródła
5. Dodaj opis źródła — pojawi się jako tooltip na kafelku

### 2. Frazy i słowa kluczowe
1. Przejdź do **Frazy i słowa kluczowe**
2. Utwórz zestaw i wpisz frazy oddzielone przecinkami
3. Podłącz zestaw do wybranych podlinków źródeł
4. Frazy automatycznie synchronizują się ze źródłami

### 3. Skrypty
1. Przejdź do **Skrypty**
2. Kliknij **+ Dodaj skrypt**
3. Wybierz powiązany silnik i język
4. Wklej kod skryptu — przydatny gdy silnik wymaga niestandardowego zapytania

### 4. Automatyzacja
1. Kliknij ⏱ w topbarze
2. Włącz harmonogram i ustaw częstotliwość
3. Opcjonalnie wpisz frazę (puste = bierze z pola głównego)
4. Przy pierwszym włączeniu przeglądarka poprosi o zgodę na powiadomienia

### 5. Backup
- **Eksport**: przycisk „Eksport" w Zarządzaj źródłami → plik JSON z pełnym backupem
- **Import**: przycisk „Import" → wybierz plik, potwierdź co zaimportować

---

## 🎯 Przykłady zapytań

| Branża | Przykładowe zapytanie |
|---|---|
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

*Lead Hunter v1.0.0-alfa — single-file, no backend, no dependencies* 🎯
