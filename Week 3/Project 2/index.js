const _ = require('lodash');

const numbers = [1,12,3,4,55,46,37,68,39];

const maxNumber = _.max(numbers);
const minNumber = _.min(numbers);

console.log("Max number:", maxNumber);
console.log("Min number:", minNumber);
