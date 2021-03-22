//the function keyword is assumed and we create our own variable to hold this function
//if there is no brackets and no return stetement it will return what is after the arrow
//https://www.youtube.com/watch?v=h33Srr5J9nY

function addFive(num) {
    return 5 + num;
  }
  
const addFive1 = num => 5 + num;



  function divide(num1, num2) {
    return num1 / num2;
  }

  
const divide1 = (num1, num2) => num1 / num2;
  
  
  function whoIsTheBestIA() {
    let iaName = 'Sara';
    console.log(iaName);
  }

const whoIsTheBestIA1= () => {
    let iaName = 'Sara';
    console.log(iaName);
  }

/////////////////////////////

  let fullName=function(first,last){
    return `${first} ${last}`
    }
   
  let fullName = (first, last ) =>{
    return `${first} ${last}`;
  }

  let fullName = (first, last) => `${first} ${last}`;

///////////////////////////////////

    const friends = ["Mansour", "Munira", "Ahmed"];
    // For each friend in friends, print "Hi friendName!"
    // Write your solution here
    friends.forEach(function(friend){
      console.log(`Hi ${friend}`)
    })

   ///////////////////////////////////////
    // Thats an array with crazy numbers we cant read 😯
    const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
    let total = 0;

    nums.forEach(function(num){
      total += num;
    })
    console.log(total);

//////////////////////////////////////
    // These crazy numbers now are strings 😯 😯  !!  
    const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
    let totalNumbersUnder4000 = 0;

    stringNumbers.forEach(function(num){
         if (parseFloat(num) < 4000)
         totalNumbersUnder4000 += parseFloat(num);
    })
    console.log(totalNumbersUnder4000)

//////////////////////////////////////
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
  let times100 = nums.map(item => item*100)
  console.log(times100)
    
///////////////////////////////////////
    const iAS = ['sara', 'khalid', 'abdullah'];
    let capitalizedIAs = iAS.map(item => item.toUpperCase());
      
    console.log(capitalizedIAs);
    //////////////////////////////////
 
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayAbbreviations = days.map(item => item.slice(0,3));
    console.log(dayAbbreviations);
    
//////////////////////////////////////
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012 , 1800];
let century20 = years.filter(item => item<=2000 && item > 1900);
console.log(century20);





////////////////////////////////////
 

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var result = nums.filter(number =>  number % 3==0);
  console.log(result);
    
////////////////////////////////////
    const names = ["Haya", "Ayman", "Mohmmed"];
    var result = names.filter(item => item.includes("a"));
    console.log(result);

///////////////////////////////////


    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum= nums.reduce((sum,item) => sum+=item );
    console.log(sum); 



////////////////////////////////////
    // Thats an array with crazy numbers we cant read 😯
    const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];

    
    let total = nums.filter(num => num <= 4000)
        .reduce((sum, number) => sum + parseFloat(number))
    
    console.log(total);
  

//////////////////////////////////   
    



const products = [
  {name: 'flower vase', price: 75},
  {name: 'lamp', price: 85},
  {name: 'jar of honey', price: 95},
  {name: 'coil', price: 65},
  {name: 'lumber', price: 55}
];


let discountProducts = products.map (item => item.price * 0.5)
console.log(discountProducts);


let cheapProducts = products.filter(item => item.price < 70)
console.log(cheapProducts);

var totalPrice = products.reduce(function(sum , item) {
  sum+=item.price
  return sum;
  },0);  // give the initial value 0 to sum so it will not take the first element wich is an object 
  console.log(totalPrice);

  ////////////////////////////////////////

const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const nums = [ 37, 826, 209, 419, 309, 48, 738, 709,728, 607, 9, 863, 976, 588, 611, 164, 383, 261, 14, 525, 479, 169, 755, 574, 330, 736, 541, 838, 577, 957, 179, 436, 333, 206, 295, 744, 926, 799, 691, 259, 401, 104, 630, 645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5, 13, 13, 17, 5, 5, 18, 12, 5, 18, 11, 2, 2, 9, 8, 4, 5, 18, 15, 18, 0, 6, 11, 18, 14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6, 10, 3, 3, 3, 18, 12, 14 ]
const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']
const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big', 'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the', 'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]

//every
  console.log(smallNums.every(x => x >=0));
  console.log(nums.every(x => x >=0));


  console.log(panagram.every(word => word.length <= 8));
  console.log(panagrams.every(word => word.length <= 8));



 
 
//filter

console.log(nums.filter(item => item<=100  ));


console.log(panagram.filter(panagram => panagram.length %2== 0));
console.log(panagrams.filter(panagram => panagram.length %2== 0));

//find

  console.log(smallNums.find(element => element%5==0));
  console.log(nums.find(element => element%5==0));
 

  console.log(panagrams.find(element => element.length > 6));

//findIndex

console.log(smallNums.findIndex(element => element%3==0));
console.log(nums.findIndex(element => element%3==0));

console.log(panagram.findIndex(panagram => panagram.length < 2));
console.log(panagrams.findIndex(panagram => panagram.length < 2));


//forEach

smallNums.forEach(num => console.log(num * 3));
nums.forEach(num => console.log(num * 3));

panagram.forEach(word => console.log(`${word}!`));
panagrams.forEach(word => console.log(`${word}!`));

//map

let newSmallNums = smallNums.map(num => num * 100);

let newPanagram = panagram.map(word => word.toUpperCase());

//reduce

let total = smallNums.reduce((sum , curr) => sum +=curr);
let total2 = nums.reduce((sum , curr) => sum +=curr);


let sentence = panagram.reduce((sen , curr) => `${sen} ${curr}`);
let sentence2 = panagrams.reduce((sen , curr) => `${sen} ${curr}`);

//some

console.log(smallNums.some(element => element%7==0));
console.log(nums.some(element => element%7==0));

console.log(panagram.some(word => word.includes("a")));
console.log(panagrams.some(word => word.includes("a")));

//sort

console.log(nums.sort()); //without any arguments the array elements are converted to strings, then sorted according to each character's Unicode code point value.

console.log(nums.sort((a , b) => a - b));//ascending (if a-b >0 that means a needs to be after b , if a-b<0 that means a is before b)
console.log(nums.sort((a , b) => b - a ));//descending

console.log(panagram.sort((a,b)=> {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if( a == b) return 0;
  return a < b ? -1 : 1;
})); //ascending (take in consideration upper and lower words)
 

console.log(panagrams.sort((a,b)=> {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if( a == b) return 0;
  return a > b ? -1 : 1;
})); //descending
