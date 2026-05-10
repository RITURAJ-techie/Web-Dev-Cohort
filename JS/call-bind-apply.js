// call and apply ==> basic chef (Kitchen)
// bind ==> (I'll send someone) returns a new function


function cookDish(ingredients, style){
    return `${this.name} prepares ${ingredients} in ${style} style!`
}

const sharmaKitchen = {name : "Sharma ji's Kitchen"}
const guptaKitchen = {name : "Gupta ji's Kitchen"}

console.log(cookDish.call(sharmaKitchen, "Paneer and spices", "Mughlai"))

const guptaOrder = ["Chole Kulche", "Punjabi Dhaba"]
console.log(cookDish.apply(guptaKitchen,guptaOrder))


function reportDelivery(location, status){
    return `${this.name} at ${location} : ${status}`;
}

const deliveryBoy = {
    name:"Ranveer"
};
console.log("Call:",reportDelivery.call(deliveryBoy, "Lyaari","Dispatched"));
console.log("Apply:",reportDelivery.apply(deliveryBoy, ["Lahore" , "Ordered"]));
console.log("Bind:",reportDelivery.bind(deliveryBoy, "Haridwar","WHat"))

// const bindReport = reportDelivery.bind(deliveryBoy, "Haridwar","WHAT");
// const bindReport = reportDelivery.bind(deliveryBoy, "Haridwar");
const bindReport = reportDelivery.bind(deliveryBoy);
// console.log(bindReport())
// console.log(bindReport("What"))
console.log(bindReport("haridwar","What"))