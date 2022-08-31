"use strict";

// scoping
// lexical scoping
// scope: space or area or environment in which a certain variable is declared
// types of scope: 1. global scope 2. function scope 3. block scope

const herName = "Tumpa"; // declare... global scope

function doMath(x, y) {
  const sum = x + y; //  function scope
  return sum;
}
doMath(5, 3); // if use 'use strict', then every functions turned into block scope

if (herName === "Tumpa") {
  const herName = "Rebecca"; // block scope
  console.log(herName);
} else {
  console.log(herName);
}

// scope chain
const myName = "Shohan";

first();
function first() {
  const age = 25;
  // console.log(job);

  if (age >= 18) {
    const NID = true;
    console.log(passport);
    var passport = true;
  }

  console.log(passport);

  function second() {
    function four() {
      console.log(2n ^ n);
    }
    function third() {
      console.log(2n);
    }
    const job = "Programmer";
    console.log(`${myName} is a ${age}-old ${job}.`);
    console.log(passport);
  }
  second();
}

// console.log(NID);

// scope of a variable: accessible areas
// variable lookup

// hoisting
// function declarations: supported
// var variable: supported, value is undefined
// let and const variable: not supported in TDZ (Temporal Dead Zone)

// this keyword
const tumpaObj = {
  fullName: "Tumpa",
  birthYear: 1996,

  clacAge: function () {
    console.log(this);
    return 2022 - this.birthYear;
  },
};

// console.log(tumpaObj.clacAge());
console.log(this);

const sabrinaObj = tumpaObj;
sabrinaObj.fullName = "sabrina";
// console.log(sabrinaObj, tumpaObj);
console.log(sabrinaObj.clacAge());

const computer = {
  clockSpeed: 3.9,

  turboFan: () => {
    console.log(this);
    return this.clockSpeed * 99;
  },
};

console.log(computer.turboFan());

// arrow functions doesn't have this keyword

function a() {
  console.log(this);
  const x = 10;
  const b = (x) => {
    console.log(this);
    return x;
  };
  return b(x);
}

console.log(a());

// regular function: this >> undefined
