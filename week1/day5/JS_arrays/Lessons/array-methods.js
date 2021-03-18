let fruits = ['orange','kiwi','pineapple','pear','grapes']
//add items to the end array.push(...item)
fruits.push('banana')
console.log(fruits)

//removes the last item of the array
fruits.pop()
console.log(fruits)

//remove the first item of the array
fruits.shift()
console.log(fruits)

//adds item in the begining of the array
fruits.unshift('coconut', 'cherry')
console.log(fruits)

//delete

delete fruits[1] //empties the placeholder of index 1 in the array.
console.log(fruits)


//splice
//array.splice(index, deletecount, elment1...elementn)
//removes elements from index, the number of elements 
//to delete is deletcount,and elemnt1...elementn replaces the deleted element

fruits[1] = 'cherry' //gives value to the item at index 1
console.log(fruits)
fruits.splice(1,1,'cherry') //removes item at index 1 and adds a new item in place of the removed item.
console.log(fruits)
let removed = fruits.splice(-2,1,'ndnd','jdjdj') //the index can have negative values in splicing to count from the end rather than from the begining
console.log(fruits)
console.log(removed)

//slice
//slices the array from start to encodeURI(excluding end) and makes it in two arrays
//fruits.slice() will create a copy of the array, takes negative positioning
console.log(fruits.slice(2))

//concat
//can be used to add two arrays together
console.log(fruits.concat(['chilli', 'tomatoes']))

//search in array
console.log(fruits.indexOf('cherry'))

//find used in objects or arrays with arrow function
// let result = fruits.find(function(item, index, array) {
//     // if true is returned, item is returned and iteration is stopped
//     // for false scenario returns undefined
//   });
const array1 = [5, 12, 8, 130, 44]
const found = array1.find(element => element > 10)
console.log(found)

  //filter
  let instructors = [
    {id: 1, name: "ahmed"},
    {id: 2, name: "maha"},
    {id: 3, name: "sami"},
    {id: 4, name: "salman"}
  ];
  let currentInstructor = instructors.find(item => item.id == 1)
  console.log(currentInstructor.name)

//filter using this scope variable

  let filtered = fruits.filter(
    function(fruit) {
      return this.indexOf(fruit)
    },
    ['cherry', 'chilli']
)
  console.log(filtered)


  //transforming array

//map

let Fruitlengths = fruits.map(fruit => fruit.length)
console.log(Fruitlengths)

//sort
console.log(Fruitlengths.sort()) //default assending order
console.log(fruits.sort()) // from a to b default

//reverse sort (using compare functions)
console.log(Fruitlengths.sort(function(a, b){return b-a}))
console.log(fruits.sort(function(a, b){return b-a}))

//reversing the array 
console.log(fruits.reverse())

//split and joining the array
let vegetableStr = 'onion, potatoes, herbs, brinjol, ladyfinger'
let vegetables = vegetableStr.split(', ')
for (let Vegi of vegetables) {
  console.log(`The vegetable name is ${Vegi}`)
}

//limit array
 let onlyTwoVegi = vegetableStr.split(', ',2)
 console.log(onlyTwoVegi)

 //split string by an argument (str)
 console.log(onlyTwoVegi[0].split(''))

 //join
 console.log(vegetables.join(' and '))
 

