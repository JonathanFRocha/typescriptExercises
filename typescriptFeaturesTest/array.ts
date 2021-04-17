const carMakers = ["red", "blue"];
const dates = [new Date(), new Date()];

const carsByMake: string[][][] = [
  [
    ["test", "test"],
    ["test", "test"],
  ],
  [
    ["test", "test"],
    ["test", "test"],
  ],
  [
    ["test", "test"],
    ["test", "test"],
  ],
];

// Help with inference when extracting values

const car4 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values

// carMakers.push(2);

carMakers.map((car: string): string => {
  return car;
});

// flexible types

const importantDates: (Date | string)[] = [new Date(), "string"];
