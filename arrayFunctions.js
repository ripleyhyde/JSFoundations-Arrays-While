/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

const {
  shouldPrintComment,
} = require("babel-core/lib/transformation/file/options/config");
const { list } = require("babel-core/lib/util");

let numbers = [1, 2, 3, 5];

function isArrayLengthOdd(n) {
  if (numbers.length % 2 == 0) return false;
  else return true;
}

console.log(isArrayLengthOdd(numbers));

// /**
//  * isArrayLengthEven(numbers):
//  * - receives array `numbers`
//  * - returns true if array has an even number of elements
//  * - returns false otherwise
//  *
//  * e.g.
//  * isArrayLengthEven([1, 2, 3]) -> false
//  * isArrayLengthEven([1, 2, 3, 4]) -> true
//  */
function isArrayLengthEven(numbers) {
  if (numbers.length % 2 !== 0) return false;
  else return true;
}
console.log(isArrayLengthEven(numbers));

// /**
//  * addLailaToArray(instructors):
//  * - receives array `instructors`
//  * - returns a new array that's a copy of array `instructors` with additional string "Laila"
//  *
//  * e.g.
//  * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
//  */
const instructors = ["Mshary", "Hasan"];
function addLailaToArray() {
  instructors.push("Laila");
  return instructors;
}
console.log(addLailaToArray(instructors));
// /**
//  * eliminateTeam(teams):
//  * - receives array `teams`
//  * - removes the last element from the array and return it
//  *
//  * e.g.
//  * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
//  */
const teams = ["Brazil", "Germany", "Italy"];

function eliminateTeam() {
  console.log(teams.pop());
}

eliminateTeam(teams);

// /**
//  * secondHalfOfArrayIfItIsEven(fruits):
//  * - receives array `fruits`
//  * - returns a new array that's the second half of the original array if it has an even number of elements
//  * - returns an empty array if it has an odd number of elements
//  *
//  * e.g.
//  * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
//  * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
//  */
const fruits = [
  "orange",
  "strawberry",
  "banana",
  "mango",
  "coconut",
  "dragonfruit",
];
function secondHalfOfArrayIfItIsEven() {
  if (fruits.length % 2 == 0) {
    // return fruits.length / 2;
    return fruits.slice(fruits.length / 2);
  }
  return [];
}
console.log(secondHalfOfArrayIfItIsEven(fruits));
// /**
//  * youGottaCalmDown(shout):
//  * - receives a string `shout`
//  * - returns the string `shout` with at most one exclamation mark (!) at the end.
//  *
//  * e.g.
//  * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
//  * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
//  * youGottaCalmDown("Hellooooo") -> "Hellooooo"
//  *
//  * Hint:
//  * - Use number method .indexOf()
//  * - Use string method .slice()
//  */
let shout = "HI";

function youGottaCalmDown(shout) {
  if (shout.indexOf("!")) return shout.slice(0, shout.indexOf("!") + 1);
  // while (shout[shout.length - 1] === "!") shout.slice(0, -1);
  // return shout;
}
else return shout;
console.log(youGottaCalmDown(shout));

// module.exports = {
//   isArrayLengthOdd,
//   isArrayLengthEven,
//   addLailaToArray,
//   eliminateTeam,
//   secondHalfOfArrayIfItIsEven,
//   youGottaCalmDown,
// };
