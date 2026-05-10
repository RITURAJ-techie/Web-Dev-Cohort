console.log(this);

function ranveerOnTheGlobalstage(){
    return typeof this;
}

console.log(ranveerOnTheGlobalstage());

// function ranveerWithNoScript(){
//     "use strict"
//     return this; // undefined
// }
// console.log(ranveerWithNoScript())


// function ranveerWithNoScript(){
 
//     return this;
    // Output in browser: Window
    // Output in Node: Global
// }
// console.log(ranveerWithNoScript())

const bollyWoodFilm = {
    name : "Bajirao Mastani",
    lead : "Ranveer",

    introduce(){
        return `${this.lead} performs in ${this.name}`
    }
}
console.log(bollyWoodFilm.introduce())
//-------------------------------------------------
//*** V V IMP

const filmDirector= {
    name : "Sanjay Leela Bhansali",
    cast : ["Raveer","Deepika","Priyanka"],

    announceCast(){
        this.cast.forEach((actor) => {
            console.log(`${this.name} introduces ${actor}`)
        })
    }
}

filmDirector.announceCast()


const filmSet = {
    crew : "Spot Boys",
    prepareProps(){
        console.log(`Outer this.crew : ${this.crew}`)
        
        function arrangeChairs(){
            console.log(`Inner this.crew : ${this.crew}`);
        }//Irregular nested Function does not inherit "this".

        arrangeChairs();

        const arrangeLights = () => {
            console.log(`Arrow this.crew : ${this.crew}`);
        }
        arrangeLights();

    },
} 

filmSet.prepareProps();


// Detached Methods

const actor = {
    name : "Ranveer",
    bow(){
        return `${this.name} takes a bow`
    }
}
console.log(actor.bow())//Function is called as a method of actor

const detachedBow = actor.bow //This only copies the function reference.
console.log(detachedBow()) // is a plain standalone function call.

