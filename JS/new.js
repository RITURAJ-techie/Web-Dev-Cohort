function TataCar(chassisNumber,modelName){
    this.chassisNumber = chassisNumber
    this.modelName = modelName
    this.fuelLevel = 100;
}

TataCar.prototype.status = function(){
    return `Tata ${this.modelName} #${this.chassisNumber} | Fuel : ${this.fuelLevel}`
}

const car1 = new TataCar("MH-101","NEXON")
const car2 = new TataCar("MH-202","HARRIER")

console.log(car1.modelName)
console.log(car2.modelName)
console.log(car1.status())
console.log(car2.status())

// Internally Equivalent To:
// const car1 = {};
// car1.__proto__ = TataCar.prototype;
// TataCar.call(car1, "MH-101", "NEXON");
// this === car1

// car1.chassisNumber = "MH-101"
// car1.modelName = "NEXON"
// car1.fuelLevel = 100


//Steps to explain in INTERVIEW
// 1. New creates empty object
// 2. Linking empty object prototype with TataCar prototype
// 3. full fill the this binding
// 4. Explicit return 
//-----------------------------------------------


// this is not same as above

function createAutoRickshaw(id, route) {
    return {
        id,
        route,

        run() {
            return `Auto ${this.id} running on ${this.route}`;
        },
    };
}

const auto1 = createAutoRickshaw("UP-1", "Lucknow-Kanpur");
const auto2 = createAutoRickshaw("UP-2", "Agra-Mathura");
console.log(auto1)
console.log(auto2)