let f = ['c', 5645, 9393.77, "hello", true, false, "Good morning", 88, -90, 777.777, 90, 665.33, "F"];
let string = [];
let getal = [];
let booleans = [];


for (let i = 0; i < f.length; i++) {
  if (typeof f[i] === "string") {
    string.push(f[i]);
  } else if (typeof f[i] === "number") {
    getal.push(f[i]);
} else if (typeof f[i] === "booleans"){
  booleans.push(stuff[i]);
}
}

console.log("Strings array:", string);
console.log("Numbers array:", getal);
console.log("booleans", booleans);

