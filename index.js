let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter((num)=>{
    if(num % 2 === 0){
        return num
    }
})
// for (number of numbers){
//     if (number % 2 == 0){
//         evenNumbers.push(number)
//     }
// }

//console.log(evenNumbers)

let books = [
    { author: 'Oscar Wilde', title: 'The importance of being earnest'},
    { author: 'Lewis Carroll', title: 'Alice in wonderland'},
    { author: 'Jules Verne', title: 'Around the world in eighty days'},
    { author: 'Victor Hugo', title: 'The Hunchback of Notre-Dame'},
    ]

let julesBooks = books.filter((auth, ind)=>{
    if(auth.author==='Victor Hugo'){
        return auth
    }

})

//console.log(julesBooks)

let people = [
    { age: 10, name: 'Gun-Britt'},
    { age: 20, name: 'Conny'},
    { age: 30, name: 'Aurora'},
    { age: 40, name: 'Kalle'},
    { age: 55, name: 'Max'},
  ]

// let totalAge = people.reduce((total,ppl, ind )=>{
//     console.log(`Loop number ${ind} and total is ${ppl.age}`)
//     return total + ppl.age
//   }, 0)

let totalAge = people.reduce((total,ppl)=> total + ppl.age, 0)
  
//console.log(totalAge)

let numbers2 = [2, 3, 1, 5, 4, 10, 8, 7, 9, 6];

let high = numbers2.reduce((acc, num) => acc > num ? acc : num,0)
console.log(high)

let highietNumber = numbers2.reduce((acc, num)=> Math.max(acc, num) ,0)

//console.log(highietNumber)

books.map((book) => console.log(book.title))

people.filter((person)=> person.age <= 40 ? console.log(true): console.log(false))

const country = [
    {name:  'Sweden', continent: "Europe" },
    {name:  'Denmark', continent: "Europe" },
    {name: 'Spain', continent: "Europe" },
    {name: "Syria", continent: "Asia"},
    {name:  "Lebanon", continent: "Asia"},
    {name: 'Brazel', continent: 'South America'},
    {name: "Argentina", continent: 'South America'},

];

country.map((countryObject)=> console.log(countryObject.name))
country.map((countryObject) => console.log(countryObject.continent))
country.filter((countryObject) => {
    if(countryObject.continent === 'Europe'){
        console.log(countryObject.name)
    }
});

let searchFunction = (searchword) => country.filter((countryObject)=>{
    if(searchword === countryObject.name || searchword === countryObject.continent === searchword){
        console.log(countryObject)
        
    }
    
})

searchFunction("Spain")
