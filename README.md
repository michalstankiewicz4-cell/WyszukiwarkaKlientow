# 🎯 Lead Hunter - Wyszukiwarka Klientów (interaktywna wizualizacja)

**Lead Hunter** to zaawansowane narzędzie do wyszukiwania potencjalnych klientów na forach, serwisach społecznościowych i platformach ogłoszeniowych. Aplikacja automatycznie przeszukuje skonfigurowane źródła w poszukiwaniu osób poszukujących produktów lub usług.

## ✨ Główne funkcjonalności

### 📂 **Zarządzanie źródłami**
- **15+ predefiniowanych źródeł** (Elektroda.pl, 4programmers.net, LinkedIn, OLX, Reddit i więcej)
- **Dodawanie własnych źródeł** z konfiguracją silników wyszukiwania
- **Sortowanie źródeł** A-Z, Z-A, według daty dodania
- **System ulubionych** - oznacz najważniejsze źródła ⭐
- **Podział na sekcje**: Ulubione i Aktywne źródła (strona wyszukiwania), Aktywne i Nieaktywne (zarządzanie)
- **Dwa widoki**: kafelki i lista z responsywnym designem

### 🔐 **System logowania do źródeł**
- **Lampki statusu logowania** przy każdym źródle:
  - 🟢 **Zielona** - zalogowany
  - 🔴 **Czerwona** - nie zalogowany (wymagane)
  - 🟡 **Żółta** - logowanie niewymagane
- **Bezpieczne przechowywanie** danych dostępowych w localStorage
- **Per-user storage** - każdy użytkownik ma własne dane logowania

### 🔍 **Inteligentne wyszukiwanie**
- **Wsparcie dla różnych silników**: wewnętrzne wyszukiwarki, Google, Bing, DuckDuckGo
- **Konfiguracja słów kluczowych** dla każdego źródła
- **Wsparcie dla podfor i sekcji** witryn
- **Ocena relevancji** wyników wyszukiwania
- **Podgląd fragmentów** z wyróżnionymi słowami kluczowymi

### 📊 **Zarządzanie leadami**
- **Zapisywanie obiecujących leadów** z możliwością późniejszego przeglądu
- **Masowe operacje** - zaznaczanie i zapisywanie wielu wyników jednocześnie
- **Kopiowanie linków** do schowka
- **Statystyki wyszukiwania** - liczba wyników, źródeł, hot leadów

### 🎨 **Nowoczesny interfejs**
- **Responsywny design** - działa na wszystkich urządzeniach
- **Ciemny sidebar** z jasnymi kartami źródeł
- **Animacje i przejścia** dla lepszego UX
- **Intuicyjna nawigacja** z szybkimi zapytaniami

## 🛠️ Technologie

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Custom Properties, Flexbox, Grid
- **Fonts**: Outfit (UI), JetBrains Mono (kod/dane)
- **Storage**: localStorage dla persystencji danych
- **Responsive**: Media queries dla różnych rozdzielczości

## 🚀 Instalacja i uruchomienie

1. **Klonuj repozytorium**:
   ```bash
   git clone https://github.com/yourusername/KlientHunter.git
   cd KlientHunter/WyszukiwarkaKlientow
   ```

2. **Otwórz w przeglądarce**:
   - Otwórz plik `wyszukiwarka.html` w dowolnej nowoczesnej przeglądarce
   - Lub uruchom lokalny serwer HTTP

3. **Konfiguracja**:
   - Przejdź do "Zarządzaj źródłami"
   - Włącz interesujące Cię źródła
   - Skonfiguruj dane logowania jeśli potrzebne
   - Dodaj własne źródła według potrzeb

## 📋 Jak używać

### 1. **Konfiguracja źródeł**
- Przejdź do sekcji "Zarządzaj źródłami"
- Włącz źródła, które chcesz przeszukiwać
- Oznacz najważniejsze jako ulubione ⭐
- Skonfiguruj dane logowania dla źródeł wymagających rejestracji

### 2. **Wyszukiwanie leadów**
- Wpisz zapytanie opisujące to, czego szukają Twoi klienci
- Np.: "szukam szkoleń z Excela", "potrzebuję agencji SEO"
- Kliknij "Szukaj" - aplikacja przeszuka aktywne źródła
- Przeglądaj wyniki z oceną relevancji

### 3. **Zarządzanie wynikami**
- Zaznaczaj obiecujące leady checkboxami
- Zapisuj pojedyncze wyniki lub masowo
- Kopiuj linki do schowka
- Przeglądaj zapisane leady w dedykowanej sekcji

## 🔧 Konfiguracja zaawansowana

### Dodawanie własnych źródeł
1. Kliknij "+" w sekcji zarządzania źródłami
2. Wybierz typ źródła (forum, social media, portal itp.)
3. Skonfiguruj silnik wyszukiwania
4. Dodaj URL główny i podfora/sekcje
5. Ustaw słowa kluczowe do wyszukiwania

### Silniki wyszukiwania
- **Internal** - wewnętrzna wyszukiwarka serwisu
- **Google** - wyszukiwanie przez Google
- **Google (site:)** - Google z ograniczeniem do domeny
- **Bing/DuckDuckGo** - alternatywne silniki

## 📱 Responsywność

Aplikacja automatycznie dostosowuje się do różnych rozmiarów ekranu:

- **Desktop (1400px+)**: Pełny interfejs z wszystkimi kolumnami
- **Laptop (1200px)**: Ukryte mniej ważne kolumny
- **Tablet (900px)**: Kompaktowy widok z podstawowymi funkcjami
- **Mobile (600px)**: Zoptymalizowany dla urządzeń mobilnych

## 🎯 Przykłady użycia

### Dla freelancerów
- "szukam programisty PHP"
- "potrzebuję grafika do projektu" 
- "zlecę tłumaczenie dokumentacji"

### Dla agencji
- "szukam agencji marketingowej"
- "polecacie firmę SEO"
- "potrzebuję wsparcia w social media"

### Dla usług B2B
- "szukam dostawcy artykułów biurowych"
- "potrzebuję księgowej"
- "szukam serwisu komputerowego"

## 📈 Roadmapa

- [ ] **API Integration** - połączenie z rzeczywistymi źródłami
- [ ] **Advanced Filtering** - filtrowanie po dacie, lokalizacji, itp.
- [ ] **Export funkcji** - eksport leadów do CSV/Excel
- [ ] **Notifications** - powiadomienia o nowych leadach
- [ ] **Analytics Dashboard** - szczegółowe statystyki
- [ ] **Team Collaboration** - współdzielenie źródeł i leadów

## 🤝 Współpraca

Zachęcamy do współpracy! Jeśli masz pomysły na nowe funkcje lub znalazłeś błędy:

1. **Fork** repozytorium
2. **Utwórz branch** dla swojej funkcji (`git checkout -b feature/AmazingFeature`)
3. **Commit** zmiany (`git commit -m 'Add some AmazingFeature'`)
4. **Push** do brancha (`git push origin feature/AmazingFeature`)
5. **Otwórz Pull Request**

## 📄 Licencja

Ten projekt jest licencjonowany pod MIT License - szczegóły w pliku [LICENSE](LICENSE).

---

**Lead Hunter** - Twój przewodnik w świecie pozyskiwania klientów! 🎯
