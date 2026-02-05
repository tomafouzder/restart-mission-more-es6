const numbers = [1, 58, 35, 17, 24];

// let sum = 0;
// for (const num of numbers) {
//     sum = sum + num;
// }
// console.log(sum)  //output: 135

const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);  //output: 135
