//1
const arr = [2, 3, 4]
arr.unshift(0, 1)
arr.push(5, 6, 7)
console.log(arr)

//2
const arr2 = [5, 7, 9]

console.log(arr2.push(6)) // returns 4 the new array length after the push

//3
const numbers = [4, 9, 7, 2, 1, 8]

numbers.forEach(function (Num, i) {
    if (Num % 2 !== 0) {
        numbers.splice(i,1,Num*2)
    }
})
console.log('Numbers:' + numbers)

//4
const numbers2 = [4, 9, 7, 2, 1, 8]

numbers2.forEach(function (Num, i) {
    if (Num % 2 == 0) {
        numbers2[i] = Num * 2
    }
})
console.log(numbers2)

//5 

let FavColors = ['orange', 'black', 'white', 'grey']
FavColors.forEach(function(color, i) {
    console.log(`My #${i+1} color is ${color}`)
})

//6

let Ages = [23,4,67,11,11]
Ages.forEach(function(age) {
    if(age>21) {
        console.log(age)
    }
})

//7

let numbers3 = [3, 2, 24, 17, 15, 1]
let newNum = numbers3.map(function(num) {
if (num%2 == 0){
    return num*7
} else {
    return num*2
}
})
