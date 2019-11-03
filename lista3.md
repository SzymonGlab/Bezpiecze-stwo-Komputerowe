# Lista 3


## Zadanie 1
### Polecenie
Zapoznaj się ze skryptem z https://github.com/filipzz/dhondt i  sprawdzić jakie dane otrzymamy dla innych wyborów wykorzystujących metodę d'Hondta.
### Rozwiązanie
Metoda D'Hondta – metoda stosowana do podziału mandatów w systemach wyborczych opartych na proporcjonalnej reprezentacji z listami partyjnymi. Polega on na obliczaniu ilorazu   , gdzie G – to liczba głosów oddanych na partię w danym okręgu , a i to kolejne liczby naturalne. Potem sortujemy otrzymane ilorazy i m pierwszych ilorazów (gdzie m to liczba mandatów w danym okręgu) otrzymuje mandaty. Każda partia otrzymuje tyle mandatów ile ma ilorazów znajdujących się w puli.
W moim rozwiązaniu zbadałem wyniki z 2011 i z 2005 roku. Rozwiązania znajdują się w plikach tabele2011.md oraz tabela2005.md

## Zadanie 2
### Polecenie
Opracuj strategię na modyfikację wyników wyborów dla każdego z poniższych scenariuszy:
    • Masz pełną kontrolę nad jednym lokalem wyborczym (tj. wszyscy członkowie komisji będą wykonywać Twoje polecenia) – masz pełną kontrolę nad tym jaki wynik w tym lokalu zostanie przesłany
    • Masz po jednym „przedstawicielu” w każdej komisji wyborczej, jedyne co taka osoba może zrobić to unieważnić kilka kart podczas liczenia głosów.
### Rozwiązanie
Musimy rozważyć scenariusz gdy partia na której wygranej nam zależy prowadzi w sondażach, oraz scenariusz gdy znajduje się ona w opozycji. 
W pierwszym przypadku gdy mamy pełną kontrolę nad lokalem wyborczym możemy zastosować strategię polegającą na obniżeniu wyników partii które w sondażach znajdują się na granicy progu wyborczego. W metodzie d'Hondta partię które są „większymi graczami” zyskują podczas rozdawania mandatów, partii które nie przekroczyły progu, więc to pomogłoby mojej partii, a zaszkodziło opozycji, która w ogólnym rozrachunku otrzymałaby mniej mandatów.
W drugim przypadku, czyli gdy zależy nam na zwycięstwie opozycji musimy doprowadzić do przekroczenia progu wyborczego jak największej ilości partii. Na podstawię sondaży rozgospodarowujemy głosy tak, aby do podziału mandatów zakwalifikowało się jak najwięcej partii, ponieważ potem w metodzie d'Hondta podczas podziału mandatów mniej z nich zostanie przydzielone zwycięzcy (partii która otrzymała w danym okręgu najwięcej głosów).
Sytuacja wygląda inaczej w przypadku, gdy „przedstawiciele” rozmieszczeni są we wszystkich komisjach wyborczych. W takiej sytuacji jesteśmy w stanie manipulować większą ilością głosów. Biorąc pod uwagę dane z roku 2019, w Polsce było 27415 komisji wyborczych, więc jeżeli mamy w każdej z nich przedstawiciela, któremu udałoby się unieważnić 5 kart do głosowania jesteśmy w stanie unieważnić w sumie ponad 100 000 głosów, co może mieć o wiele większy wpływ niż przejęcie jednego lokalu wyborczego. Podobnie jak w powyższych rozważaniach weźmiemy na tapetę dwa przypadki, pierwszy gdy zależy nam na zwycięstwie partii prowadzącej w sondażach oraz drugi, gdy zależy nam na zwycięstwie opozycji. 
W sytuacji gdy wspieramy lidera sondaży, aby osiągnąć sukces powinniśmy unieważniać głosy oddawane na partię, znajdujące się na granicy progu wyborczego. Mniejsza liczba partii oznacza więcej mandatów dla naszego ugrupowania podczas dzielenia głosów. Natomiast w przeciwnym wypadku gdy zależy nam na zwycięstwie opozycji, taktyka jest prosta - musimy unieważniać głosy oddane na partię, której wynik chcemy obniżyć.

## Zadanie 3
### Polecenie
Zaproponuj zmiany w sposobie przetwarzania wyników, aby zapobiegać zaproponowanym przez Ciebie atakom.
### Rozwiązanie
Przykładowym zabezpieczeniem przed zmianą wyników po przejęciu lokalu może być prowadzenie statystyki komitetów i badanie jak każdy z komitetów wypada na tle swoich sąsiadów. Wiemy że ludzie z określonych rejonów polski mają specyficzne poglądy, więc znaczne odchylenie na tle sąsiadów może sugerować że wyniki zostały przekłamane i że dana komisja powinna zostać sprawdzona.
Na pewno przed takim przejęciem dobrym zabezpieczeniem byłoby także wyrywkowe kontrolę oraz umieszczanie wartowników z niezależnych organizacji, którzy sprawowali by pieczę nad porządkiem w danej komisji.
Wyniki można by także było porównywać z wynikami z zeszłych lat, aby odkryć anomalie, które mogłyby sugerować oszustwo.
W przypadku fałszerzy we wszystkich komisjach potrzeba by wprowadzić specjalne procedury, które utrudniałyby unieważnianie głosów. Na przykład mogłoby by to być podwójna weryfikacja unieważnionych głosów przez dwóch różnych członków komisji. Inną formą kontroli mogłoby być prowadzenie statystyki członków komisji którzy unieważnili głosy i w przypadku odstępstwa od średniej dany członek zostaje dokładnie sprawdzony przez odpowiednie służby.
Innym rozwiązaniem byłoby wprowadzenie współczynnika głosów nieważnych, który powodowałby że jeżeli głosy nieważne stanowią jakiś określony % wszystkich głosów, to głosowanie musi zostać powtórzone.
