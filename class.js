/**
 * class ---> template
 * properties
 * method (a spacial type of function inside a class without the function keyword)
 * 
 * object
 */

class Player {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.location = "Bangladesh"
        // console.log('calling the constructor method : ', name)
    }

    goal() {
        console.log('score a goal');
    }
    getTeamName() {
        return "Borsa"
    }
}


const player1 = new Player('Tom Brady', 33);
const player2 = new Player('O Shanto', 12);
// player1.goal();
console.log(player1);
console.log(player2);
