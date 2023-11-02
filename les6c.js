let stuff = ['c', 5645, 9393.77, "hello", true, false, "Good morning", 88, -90, 777.777, 90, 665.33, "F"];
let strings = [];
let numbers = [];
let booleans = [];

for (let i = 0; i < stuff.length; i++) {
  if (typeof stuff[i] === "string") {
    strings.push(stuff[i]);
  } else if (typeof stuff[i] === "number") {
    numbers.push(stuff[i]);
  } else if (typeof stuff[i] === "boolean") {
    booleans.push(stuff[i]);
  }
}

console.log("Strings array:", strings);
console.log("Numbers array:", numbers);
console.log("Booleans array:", booleans);
