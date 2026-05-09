const hero = {
    name : "Luna the Brave",
    class : "Mage",
    level : 12,
    health : 85,
    mana : 120,
    isAlive : true,
}

// to access :- hero.name or hero[name]

hero.weapon = "Fire"

delete hero.level

const ranger = {
    name : "Lakshya the Swift",
    agility : 80,
    stealth : undefined
};

// console.log("name" in ranger)
// console.log("stealth" in ranger)
// console.log("toString" in ranger)

const artifact = {
    name : "Obsidian Crown",
    era : "Ancient",
    value : "50000",
    material : "volcanic glass",
};

// console.log(Object.keys(artifact))
// console.log(Object.values(artifact))
// console.log(Object.entries(artifact))

// Syntax : for....of loop
// for (variable of iterable)
//   statement

for (const [key,value]  of Object.entries(artifact)) {
    // console.log(`${key} : ${value}`)    
}

// Converting to Object from AN array of array elements
const priceList = [
    ["Obsidian Crown",5000],
    ["Ruby Pendant",3000],
    ["Iron Shield",500]
]

const priceObject = Object.fromEntries(priceList);
// console.log(priceObject)

const displayCase = {
    artifact : "Obsidian",
    location : "Hall A, Case 3",
    locaked : true,
};

Object.freeze(displayCase);
displayCase.newProp = "test";
// console.log(displayCase)

const catalogEntry = {
    id : "ART-001",
    description : "Ancient Crown",
    verified : true
}

Object.seal(catalogEntry) //*** Cannot change the structure, add or delete something but can rewrite the values present in the object

catalogEntry.gun = "M416";
catalogEntry.id="GUN_001"
// console.log(catalogEntry)

// Another way to add Properties :

const secureArtifacts = { name : "Ruby Pendant"};
// To add properties   where to add  , what to add ,  
Object.defineProperty(secureArtifacts, "catalogID", {
    value : "SEC_999",
    writable : true,
    // writable : false, // can change the value
    // enumerable : true,
    enumerable : false,// will not allow to loop
    configurable : false,
})

console.log(secureArtifacts.catalogID);

secureArtifacts.catalogID= "HACKED"
console.log(secureArtifacts.catalogID); // Can't be changed because in properties(writable),
                                        // You have defined it False



for (const [key,value] of Object.entries(secureArtifacts)){
    console.log(`${key} : ${value}`);
}

const desc = Object.getOwnPropertyDescriptor(secureArtifacts, "catalogID")
console.log(desc)