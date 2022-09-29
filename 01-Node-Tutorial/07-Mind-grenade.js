const num1 = 5;
const num2 = 10;

function addValues() {
  console.log(`the sum is: ${num1 + num2}`);
}

function subValues() {
  console.log(`the difference is: ${num1 - num2}`);
}

addValues();
subValues();

// Exporting multiple functions
module.exports = { addValues, subValues };
