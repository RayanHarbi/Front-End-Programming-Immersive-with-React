// code along
const developers = ['Ahmed', 'Salman', 'Maha', 'Sami']

// Individually print message for each item in array
console.log('Hello ' + developers[0])
console.log('Hello ' + developers[1])
console.log('Hello ' + developers[2])

// Loop through array using i as the index
for (let i = 0; i < developers.length; i++) {
  console.log('Hello ' + developers[i])
}

for (let nameIndx in developers) { //used with objects mostly to iterate through their properties
    console.log(`${developers[nameIndx]}`)
}

developers.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });

