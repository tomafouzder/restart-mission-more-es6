const student = {
    name: 'abul',
    marks: 58,
    1: 678,
    'home-address': 'kochu khate'
}

// dot notation
const studentOne = student.marks;
// console.log(studentOne);


// bracket notation
const studentTwo = student['1']
const studentTwo2 = student['name']
console.log(student['home-address']);

for (const key in student) {
    const value = student[key]  // use bracket notation 
    console.log('value: ', value);
}

const propName = 'marks';
console.log(student[propName]);  // use bracket notation 





