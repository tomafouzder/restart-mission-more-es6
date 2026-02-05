const result = [45, 28, 39, 74]
// const doubled = [];

// for (const num of result) {
//     const result = num * 2;
//     doubled.push(result);
// }

// use case of map:

// const doubledIt = x => x * 2;
// const doubled = result.map(doubledIt);

const doubled = result.map(x => x * 2)  //one line function with map
const fiveTimes = result.map(num => num * 5);
const squared = result.map(num => num * num);
// console.log(doubled);
// console.log(fiveTimes);
// console.log(squared);

const friends = ['Javed', 'Pavel', 'Kodbel', 'Noble'];
const FriendName = friends.map(name => name.toUpperCase());
const nameLengths = friends.map(name => name.length);
const firstLatter = friends.map(name => name[0].toLowerCase());
// console.log(FriendName);
// console.log(nameLengths);
// console.log(firstLatter);

const numbers = result.map((num, index) => {
    console.log(num * index);
    return (num * index);

})
console.log(numbers);

