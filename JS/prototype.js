const prithviraj = {
    name : "Prithviraj",
    generation : "grandfather",
    cookTraditionalDish(){
        return `${this.name} cooks an ancient family recipe`;
    }
}

const raj = Object.create(prithviraj);
console.log(raj) // Khud ka kuch nahi hai sb baap ka

raj.name="raj"
raj.generation="father"
raj.runBusiness = function(){
    return `${this.name} runs the family business`;
};

console.log(raj)

const ranbir = Object.create(raj)

ranbir.name = "Ranbir";
ranbir.generation = "son"
ranbir.makeFilm = function(){
    return `${this.name} directs BlockBuster Movie`
}

console.log(ranbir.makeFilm());
console.log(ranbir.runBusiness());
console.log(ranbir.cookTraditionalDish());

Array.prototype.last = function(){
    return this[this.length-1] // THIS refers to Array
}
console.log([1,2,3].last())

