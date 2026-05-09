// console.log(brewPoints())
function brewPoints(ingredient, dose){
    return `Brewing portion with ${ingredient} (x${dose}) ... Portion ready`;
}


const mixElixir = function(ingredient){
    return `mixing elixir with ${ingredient}`;
}


// no own "this", no 'arguments' object
const distilEssence = (ingredient) => {
    return `mixing elixir with ${ingredient}`;
}

function oldBrewingLogic(){
    // console.log("Type:" , typeof arguments); //Type : OBJECT
    // console.log(arguments) // Seems like an Array
    // console.log("Is Array:",Array.isArray(arguments)); // NOT Array
    // const argArray = Array.from(arguments)
    // console.log(argArray)
}

oldBrewingLogic("Sage","Rosemarry");

const  arrowBrew = () => {
    try{
        // console.log(arguments);
    }catch(error){
        // console.log(error.message)
    }
};

arrowBrew();


// let globalCount=0

// function brewAndCount(name){
//     globalCount++
// }

// function anotherFncForClass(brewAndCount){
//     return function newBrew(){
//         //do something
//     }
// }



//IIFE, ()()


// (()=>{})()
    
// (function () { })()

// const portionShop = (function(){
//     let inventory=0;

//     return {
//         brew(){
//             inventory++;
//             return ` Brew Portion #${inventory}`;
//         },
//         getStock(){
//             return inventory;
//         },
//     };
// });
// So this only creates a function and stores it in portionShop.
// const shop = portionShop()
// console.log(shop)
// console.log(shop.brew());


const CafeShop = (function () {
    let inventory = 0;

    return {
        brew() {
            inventory++;
            return `Brew Portion #${inventory}`;
        },

        getStock() {
            return inventory;
        },
    };
})();

// The final () immediately executes the function.
// So the returned object gets stored directly into CafeShop.

// console.log(CafeShop);
// console.log(CafeShop.brew());
console.log(CafeShop.inventory);// Cannot be accessed outsode the scope
console.log(CafeShop.getStock());


// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   return displayName;
// }
// const myFunc = init();
// myFunc()

// A function remembers the variables from the scope where it was created,
// even after that scope is gone.
// That remembered connection = closure.