# Bezpieczeństwo komputerowe

## Lista 2

#### Zadanie 1
Zadanie można wykonywa¢ w grupach max 2-osobowych. Skofiguruj w odpowiedni sposób laptopa, udaj się z nim w publiczne miejsce i udostępnij publicznie otwartą sieć bezprzewodową (przeprowadź testy z różnymi nazwami SSID). Sporządźcie raport zawierający:
* listę poszukiwanych SSID sieci, do których chciały się podłązyć urządzenia;
* statystykę określającą nazwę udostępnianej (przez Ciebie) sieci i liczbę urządzeń, które
się do niej podłączyły (na podstawie pakietów DNS),
* listę stron www odwiedzonych przez u»ytkowników sieci,
* listę protokołów i usług, z których korzystali użtkownicy sieci - jeżeli protokół nie
wykorzystywał szyfrowania, to sporządź listę usług/serwisów/stron do których możnaby
było zdobyć dostęp wykorzystuj¡c przesłane niezaszyfrowane loginy i hasła.
* mapę lokalizacji, z którymi łączyły się komputery (wykorzystaj do tego celu programy
np: traceroute, visualroute itp.).
Raport ma być wiarygodny: tj. zostaniesz zostać poproszona/poproszony o pokazanie odpowiadających danych źródłowych.

#### Zadanie 2
Napisz aplikację (skrypt) przechwytującą nieszyfrowane sesje www (wykorzystaj np. Wireshark). Program ma:
* nasłuchiwać ruch sieciowy,
* wynajdywać identyfikatory sesji (dla predefiniowanych stron), a następnie (po wybraniu)
* zmieniać odpowiednie wpisy w ciasteczkach Twojej ulubionej przeglądarki tak, aby mo»na byªo się podszyć
pod podsłuchaną sesję.

Wykorzystaj np. programy tcpdump i aircrack (dla sieci zabezpieczonych WEP/WPA). Możesz skorzystać z danych zebranych w zadaniu nr 1.

## Lista 3
#### Zadanie 1
Sprawdź jakie dane otrzymasz dla innych wyborów wykorzystujących metodę d'Hondta (parlamentrarne 2019/11/09/05/..., wybory samorządowe).

#### Zadanie 2
Opracuj (co najmniej) dwie strategie na modyfikację wyniku wyborów dla ka»dego z poniższych scenariuszy:
* masz pełną kontrolę nad jednym lokalem wyborczym (tj. wszyscy czªonkowie komisji będą wykonywać Twoje polecenia) - masz pełną kontrolę nad tym jaki wynik w tym lokalu zostanie przesłany.
* masz po jednym przedstawicielu w każdej komisji wyborczej, jedyne co taka osoba może zrobić to unieważnić kilka kart podczas liczenia głosów.

## Lista 4
Stwórz stronę phishingową działającą na twoim serwerze (np. w maszynie wirtualnej) przechwytującą wprowadzane hasła np. do serwera poczty studenckiej/Gmaila/...

* strona musi działać w oparciu o protokół https,
* przeglądarka ma akceptować certyfikat

## Lista 5
#### Zadanie 1
Stwórz prototyp strony bankowej. Strona ma posiadać następujące elementy:
* ekran zakładania konta (pola: login, email, hasło + weryfikacja hasła)
* ekran logowania (login/hasło),
*możliwość przypominania/resetowania hasła.

Musisz zadbać o bezpieczeństwo, postępuj zgodnie z https://www.owasp.org/index.php/
Input_Validation_Cheat_Sheet. Dane dotyczące użytkowników przechowuj w SQL-owej
bazie danych.
##### Część włałciwa:
* strona z formularzem,
* strona z potwierdzeniem danych  wy±wietlająca dane wprowadzone w formularzu. Po akceptacji użytkownika, dane są przesyłane na serwer (i zapisywane w bazie danych).
* strona z potwierdzeniem wykonania przelewu - zawierająca dane, które otrzymał serwer.
* strona z historią potwierdzonych przelewów.
Dokonać przelewu może jedynie zalogowany użytkownik. Hasło użytkownika ma być przechowywane w sposób bezpieczny.

#### Zadanie 2
Napisz kod w javascript, który będzie zmieniać działanie wyżej opisanego serwisu w ten sposób, że następuje podmienienie numeru konta na inny.
Podmiana ma się dokonać jedynie w warstwie wizualnej tj.:
• serwer ma otrzymać podmieniony numer konta,
• strona ma zawsze wyświetlać wprowadzony numer konta.

#### Zadanie 3
Całość zamień w rozszerzenie do przeglądarki (Firefox/Chrome/...), które będzie wykonywać w/w czynności.

## Lista 6
#### Zadanie 1
Przechwyciłeś kilkanaście kryptogramów. Wiesz, że każdy z nich powstał jako rezultat szyfrowania wiadomości za pomocą szyfru strumieniowego. Co więcej, do szyfrowania każdej wiadomo±ci wykorzystano ten sam klucz, czyli: ci = Enc(k, mi) = mi ⊕ G(k)
dla i = 1 . . . l, gdzie G jest generatorem bitów pseudolosowych, a k jest kluczem tajnym.
Napisz program, który przyjmuje na wejściu l kryptogramów zaszyfrowanych za pomocą szyfru strumieniowego z tym samym kluczem. Na
wyjściu program ma zwrócić teksty jawne.
