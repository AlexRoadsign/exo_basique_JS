const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Liste des entrepreneurs nés dans les années 1970")
let seventies_array = []
for (let i=0 ; i < entrepreneurs.length; i++){
    if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year <= 1979){
    seventies_array.push(entrepreneurs[i].first)}
    };
console.log(seventies_array)

console.log("Array contenant le prénom et le nom des entrepreneurs")
let names_array = []
for(let i=0; i< entrepreneurs.length; i++){
  names_array [i] = entrepreneurs[i].first + " " + entrepreneurs[i].last
}
console.log(names_array)

console.log("Quel age aurait chaque entrepreneur aujourd'hui")
let current_year = 2019
let current_age_array = []
for(let i=0; i< entrepreneurs.length; i++){
  current_age_array[i] = names_array[i]+ " : " + (current_year - entrepreneurs[i].year)
}
console.log(current_age_array)

console.log("Liste des entrepreneurs par ordre alphabetique")
entrepreneurs.sort(function(a, b){
    if(a.last < b.last) { return -1; }
    if(a.last > b.last) { return 1; }
    return 0;
})
console.log(entrepreneurs)
