class Cricketer{
    constructor(name,role){
        this.name = name
        this.role = role
        this.matchesPlayed = 0
        this.stamina = 100
    }

    introduce(){
        return `${this.name} the ${this.role} | matchesPlayed : ${this.matchesPlayed} | stamina : ${this.stamina}`
    
    }
}

const player1 = new Cricketer("Virat","Batsman")
const player2 = new Cricketer("Bumrah","Bowler")

console.log(player1.hasOwnProperty("name"))
console.log(typeof Cricketer) //***FUNCTION


class Debutant{
    constructor(name){
        this.name=name
        this.walkout = ()=> `${this.name} walks out to bat for the first time`
    }
}

const debutant1 = new Debutant("Shubman")
const somethingFromLastClass = debutant1.walkout

const debutant2 = new Debutant("Yashasvi")
console.log(debutant1===debutant2);
console.log(somethingFromLastClass())