// Chain concept: nested object

const student = {
    name: 'abul',
    family: {
        title: 'buiyah',
        member: 10,
        // child: {
        //     first: 'afchana',
        //     secound: 'abul'
        // }
    },
    marks: 58,
    1: 678,
    'home-address': 'kochu khate'
}

console.log(student.family.child?.first);   // optional chain ==> ?
