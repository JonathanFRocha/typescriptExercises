let apples;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();
//arr
let colors: string[] = ["red", "blue", "black"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

// classes
class Car {}
let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) function that return the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates.x);

// 2) when we declare a variable on one line
//    and initialize it later
let words = ["red", "green", "blue"];

let foundWord: boolean;

words.forEach((e) => {
  if (e === "green") {
    foundWord = true;
  }
});

// 3) Variable whose type cannot be inferrede correctly

let number = [-10, -1, 12];

let numberAboveZero = false;

number.forEach((e) => {
  if (e > 0) {
    numberAboveZero = e;
  }
});
