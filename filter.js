const numbers = [1, 2, 13, 4, 45, 16, 7];

const greaterThan10 = numbers.filter(num => num > 10);
const evenNumbers = numbers.filter(x => x % 2 == 0)
const oddNumbers = numbers.filter(x => x % 2 == 1)
console.log(greaterThan10);
console.log(evenNumbers);
console.log(oddNumbers);
