const student = {
    name: 'abul',
    marks: 58,
    1: 678,
    'home-address': 'kochu khate'
}

// dot notation
const studentOne = students.marks;
// console.log(studentOne);


// bracket notation
const studentTwo = students['1']
const studentTwo2 = students['name']
console.log(students['home-address']);

for (const key in students) {
    const value = students[key]  // use bracket notation 
    console.log('value: ', value);
}

const propName = 'marks';
console.log(students[propName]);  // use bracket notation 





