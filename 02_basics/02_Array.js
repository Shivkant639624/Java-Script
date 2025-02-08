const marvelHeros = ["Thor","Ironman","Spiderman"]
const DcHeros = ["Batman","Superman","Flash"]


// push() => Complete array has been push at last index
// marvelHeros.push(DcHeros)
// console.log(marvelHeros)
// console.log(marvelHeros[3][1])

// concat() => from last index add all element of a array and returns new array
const AllHero = marvelHeros.concat(DcHeros)
// console.log(AllHero)

// spred operator => ...Array1, ...Array2, ...Array3,  ...many-more
// It can be used for more than two array in a single array
const all_new_heros = [...marvelHeros, ...DcHeros]
// console.log(all_new_heros)


// flat() =>
const multiDimArr = [1,2,3,[23,4,5,[59,9,23,6]]]
const arrayRes = multiDimArr.flat(Infinity)
// console.log(arrayRes)

// from() => convert String into array with a single character

console.log(Array.isArray("Shivkant"))
// console.log(Array.from("Shivkant"))
console.log(Array.from({name : "Shivkant"})) // interesting


// more than one Variable => array
let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3))