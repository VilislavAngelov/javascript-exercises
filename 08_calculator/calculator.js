const add = (a, b) => a+b;

const subtract = (a, b) => a-b

const sum = function (arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total* current, 1);
};

const power = (a, b) => a**b;

const factorial = function(a) {
  let sum = 1;
  for(let i = 0; a>0; i++){
    sum *=a;
    a--;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
