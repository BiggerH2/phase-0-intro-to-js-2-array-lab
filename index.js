// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  // Add the provided name to the end of the cats array
  cats.push(name);
}

function destructivelyPrependCat(name) {
  // Add the provided name to the beginning of the cats array
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  // Remove the last cat from the cats array
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  // Remove the first cat from the cats array
  cats.shift();
}

function appendCat(name) {
  // Return a new array with the provided name added to the end (without modifying the original cats array)
  return [...cats, name];
}

function prependCat(name) {
  // Return a new array with the provided name added to the beginning (without modifying the original cats array)
  return [name, ...cats];
}

function removeLastCat() {
  // Return a new array with the last cat removed (without modifying the original cats array)
  return cats.slice(0, -1);
}

function removeFirstCat() {
  // Return a new array with the first cat removed (without modifying the original cats array)
  return cats.slice(1);
}

// Exporting the functions if needed
module.exports = {
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
