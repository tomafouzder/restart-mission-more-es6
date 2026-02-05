const students = [
    { id: 1, name: 'abul', mark: 45 },
    { id: 2, name: 'babul', mark: 55 },
    { id: 3, name: 'sabul', mark: 85 },
    { id: 4, name: 'dabul', mark: 95 },
]

const names = students.map(student => student.name)
const marks = students.map(student => student.mark * 1.2)
const goodStudents = students.filter(student => student.mark > 80);
const goodStudent = students.find(student => student.mark > 80);
// console.log(names);
// console.log(marks);
// console.log(goodStudents);
console.log(goodStudent);
