// var , const , let
const tax = 5000;
const eta = 7;
// eta = 5;  // error

const students = { name: 'abul', marks: 75 }
const friend = ['babul', 'kabul', 'dabul']


// default parameter
function add(num1 = 0, num2 = 0) {
    // multiline code
}


//Template string 
const dynamicTax = `My tax ${tax} and marks ${students.marks * 1.2} has friend ${friend[1]}`

const innerHTML = `
<div>
<h1>Hello: ${friend.length}</h1>
</div>
`

// arrow function
const add2 = (num1 = 0, num2 = 0) => num1 + num2;
const tenTimes = x => x * 10;


// spread
const newFriends = [...friend, 'sikib', 'biplop', 'sudipto', 'hafsa']
console.log(newFriends)


// destructuring 
// array = array
// object= object
const { marks: totalMarks, age = 0 } = students
// console.log(marks);
console.log(totalMarks, age);

const [firstFriend] = friend;
console.log(firstFriend);

