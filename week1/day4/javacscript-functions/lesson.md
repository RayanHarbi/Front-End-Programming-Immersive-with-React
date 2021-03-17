[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Functions

## Objectives

By the end of this, developers should be able to:

- Create and invoke functions
- Define parameters and pass arguments
- Use return values

## Preparation

1. Fork and clone this repository
1. Create a new branch, `training`, for your work and change into it.

## Functions

`Function` holds encapsulated executable code.

Basic syntax:
```js
const code = function () {}
```

### Demo: Functions

Let's write a function that will print a message for us!

```js
// define function
const printHelloWorld = function () {
  console.log('Hello World!');
}

// invoke function
printHelloWorld();

// invoke function as many times as we want
printHelloWorld();
printHelloWorld();
printHelloWorld();
printHelloWorld();
```

We can make our functions more useful by passing data into them.

```js
// define function
const printHello = function (name) {
  console.log('Hello ' + name)
}

// invoke function
printHello("World");

// invoke function as many times as we want
printHello("World");
printHello("Usman");
printHello("Marc");
printHello("Alanoud");
```

When we define a function that accepts data, we call the key word that will represent the data a `parameter`.

```js
const myFunctionName = function(parameterName){
  console.log(parameterName);
}
```

When we pass the data into our function invocation, we call it an `argument`.

```js
const myFunctionName = function(parameterName){
  console.log(parameterName);
}

// arguments can be any data type
myFunctionName(1);

// arguments can also be variables
const argument = 1;
myFunctionName(argument);
```

### Code Along: Functions

Let's create a function that will add two numbers for us and print the sum.
```js
const add = function () {
  console.log(5 + 10);
}

add();
```

Next, let's write a function that will add any two numbers for us.
```js
const add = function (num1, num2) {
  console.log(num1 + num2);
}

add(1, 10);
add(5, 20);
```

Next, let's write a function that will subtract any two numbers for us.
```js
const subtract = function (num1, num2) {
  console.log(num1 - num2);
}

subtract(1, 10);
subtract(10, 1);
```

Notice how the order matters.  The first `argument` will always be assigned to the first `parameter`.

### Demo: Return Values

In mathematics, a function maps one or more inputs to a single output.

In javascript, we also often prefer functions to return us an output instead of `console.log` the output.

```js
const five = function () {
  return 2 + 3;
}

const add = function (a, b) {
  return a + b;
}

const adder = function (a, b) {
  a + b // returns undefined, not the sum of a + b
}

const fiveSum = five(); // 5

const addSum = add(5,10); // 15

const adderSum = adder(5,10) // undefined
```

It is important to remember that `console.log` prints its argument to the
`console` (the terminal using node, the console area of the debug tools using
chrome) but does not return a value. *THIS IS A COMMON POINT OF CONFUSION* I
REPEAT, `console.log` does *not* return a value (it returns `undefined`).

### Code Along: Parameters and Arguments

When you create a function, you specify the parameters.  When you call a
function, you specify the arguments (which are the values that the parameters
are set to when your function executes).

In JavaScript, functions can be defined as taking zero or more arguments.

```js
const zero = function () {
  return 0
}

// You call this function by writing: `zero()`

const one = function (param) {
  return param
}

// You call this function by writing: `one('argumentExample')`

const three = function (param1, param2, param3) {
  return param2
}

// You call this function by writing: `three(1, 'two', false)`

// What would happen if we called this function using only one argument?

three(1) // ?
```

Let's create a function that will accept in any number and add one to it.

```js
const addOne = function (num) {
  return num + 1
}
```

Let's create a function that will accept in a first name and last name to create a full name.

```js
const fullName = function (firstName, lastName) {
  return firstName + " " + lastName
}
```

The important piece to remember is that you need the `return` keyword to return
a value. If you forget it or choose not to include it, the function still
returns something to the caller, and it will be `undefined`.

### Function Expressions vs. Function Declarations

There is more then one way to write a function. In this lesson we covered writing functions as **Expressions**. But you could also write your functions as **Declarations**. Although, it is not recommended. But you will find code on the job that uses the later format.

**Example: Function Expression**

```js
const doSomething = function() {}
```

**Example: Function Declaration**

```js
function doSomething() {}
```

### Recursion

Let's talk about [Recursion](README.md).



## Additional Resources

- [Functions Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Function Basics JS Info](https://javascript.info/function-basics)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
