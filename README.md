# Higher order functions - bootcamp

## Övning 1   
Skriv ett program som nedan array returnerar en ny array med de tal som är jämna (använd modulus % operatorn).

Skriv programmet först med en for-loop och sedan igen där du använder metoden filter(). Använd arrow functions.

```
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

## Övning 2
Returnera i en ny array alla böcker av författaren Jules Verne från nedanstående array. Använd metoden filter().

```
let books = [
{ author: 'Oscar Wilde', title: 'The importance of being earnest'},
{ author: 'Lewis Carroll', title: 'Alice in wonderland'},
{ author: 'Jules Verne', title: 'Around the world in eighty days'},
{ author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame'},
]
```

## Övning 3
Skriv ett program som summerar ihop allas ålder och returnerar summan. Använd metoden reduce().

```
let people = [
  { age: 10, name: 'Gun-Britt'},
  { age: 20, name: 'Conny'},
  { age: 30, name: 'Aurora'},
  { age: 40, name: 'Kalle'},
  { age: 55, name: 'Max'},
]
```

## Övning 4
Skriv ett program som från nedanstående array retunerar det högsta talet, använd reduce().

```
let numbers = [2, 3, 1, 5, 4, 10, 8, 7, 9, 6];
```

## Övning 5
Skriv ett program som returnerar alla titlar och skriver sedan ut dessa med console.log. Använd metoden map().

```
let books = [
  { author: 'Oscar Wilde', title: 'The importance of being earnest'},
  { author: 'Lewis Carroll', title: 'Alice in wonderland'},
  { author: 'Jules Verne', title: 'Around the world in eighty days'},
  { author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame'},
]
```

## Övning 6
Skriv ett program som kollar om alla är under 40 och returnerar true eller false.

```
let people = [
  { age: 10, name: 'Gun-Britt'},
  { age: 20, name: 'Conny'},
  { age: 30, name: 'Aurora'},
  { age: 40, name: 'Kalle'},
  { age: 55, name: 'Max'},
]
```

## Övning 7
Nu ska vi bygga en reseguide! Skapa upp en array som innehåller ett antal land-objekt. Var land-objekt har egenskapen `name` som innehåller namnet på landet och egenskapen `continent` som innehåller vilken kontinent landet ligger i. Alla värdsdelar ska finnas med med minst ett land från varje världsdel.

Skriv sedan ett program som gör följande:
1. Skriver ut namnet på alla länder.
2. Skriver ut namnet på alla kontinenter.
3. Skriver ut namnet på alla länder i Europa.
4. Du kan söka efter land eller kontinent och få tillbaka ett resultat av sökningen.
