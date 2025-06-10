# UMG-MED - Dokumentacja

UMG-MED to aplikacja webowa do zarządzania wizytami medycznymi oraz prezentacji zespołu lekarskiego i placówek.

## Spis treści
- [UMG-MED - Dokumentacja](#umg-med---dokumentacja)
  - [Spis treści](#spis-treści)
  - [Opis projektu](#opis-projektu)
  - [Struktura projektu](#struktura-projektu)
  - [Funkcjonalność](#funkcjonalność)
  - [Użyłem](#użyłem)
  - [Instrukcja uruchomienia](#instrukcja-uruchomienia)
  - [Wykonał](#wykonał)

## Opis projektu
UMG-MED umożliwia:
- Przeglądanie oferty placówki i zespołu lekarzy
- Umawianie wizyt online przez formularz z dynamicznym popupem
- Przechowywanie wizyt w bazie danych MySQL

## Struktura projektu
```
UMG-MED/
├── images/                # Zdjęcia lekarzy i placówki
│   └── grafiki lekarzy użytych w projekcie
├── js/
│   └── wizyty.js          # Logika popupów i formularzy
├── styles/
│   ├── main.css           # Stylizacja strony głównej
│   ├── lekarze.css        # Stylizacja strony lekarzy
│   └── wizyta.css         # Stylizacja strony wizyt
├── main.html              # Strona główna
├── lekarze.html           # Lista lekarzy
├── wizyta.html            # Umawianie wizyty
├── submit-appointment.php # Backend obsługi wizyt (PHP + MySQL)
└── README.md              # Dokumentacja
```

## Funkcjonalność
- **Strona główna** (`main.html`):
  - Prezentacja placówki, mapa Google, nawigacja.
- **Lekarze** (`lekarze.html`):
  - Lista lekarzy z opisami i zdjęciami.
- **Umawianie wizyty** (`wizyta.html` + `js/wizyty.js`):
  - Wybór usługi medycznej.
  - Dynamiczny popup z formularzem (pola zależne od usługi).
  - Walidacja daty, potwierdzenie przed wysłaniem.
  - Wysyłka danych do backendu PHP.
- **Backend** (`submit-appointment.php`):
  - Tworzenie bazy i tabeli, zapis wizyty do MySQL.
  - Obsługa różnych pól formularza.

## Użyłem
- **Frontend:** HTML5, CSS3 (design), JavaScript (skrypty- dynamiczne popupy)
- **Backend:** PHP 7+, MySQL (XAMPP)

## Instrukcja uruchomienia
1. **Wymagania:**
   - XAMPP lub inny serwer z PHP i MySQL
   - Przeglądarka internetowa
2. **Instalacja:**
   - Skopiuj cały folder `UMG-MED` do katalogu `htdocs` XAMPP.
   - Upewnij się, że serwer Apache i MySQL są uruchomione.
3. **Korzystanie:**
   - Otwórz w przeglądarce: `http://localhost/UMG-MED/main.html`
   - Przeglądaj strony, umawiaj wizyty (dane trafiają do bazy `db_appointment`, która powinna się utworzyć jeśli takowej brakuje.)

## Wykonał
Filip Jurczuk 

---

**Projekt utworzony na potrzeby zaliczenia.**
