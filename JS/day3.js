// BASIC ARRAY

const carriage1= ["hi","hello","hola"]
const passenger=["hi","hello",'hola']

//Empty Array

const threeMTseats= Array(3);
// console.log(threeMTseats.length);//3

const singlePassenger = Array.of(3) //The Array.of() static method creates a new Array instance 
                                    // from a variable number of arguments, 
                                    // regardless of number or type of the arguments.

// Array.of()
// Array.of(element1)
// Array.of(element1, element2)
// Array.of(element1, element2, /* …, */ elementN)
// console.log(singlePassenger)

const trainCode = Array.from("KAMAYANI")
// The Array.from() static method creates a new,
// shallow-copied Array instance from an iterable or array-like object.

//console.log(trainCode)


//Splice
let arr = [10, 20, 30, 40];
arr.splice(1, 2);//Starting from index 1 (20), remove 2 elements (20, 30).
// console.log(arr); // Mutates the Array


// Searching : indexof, includes, find, findIndex

// Key points
// 1. [], Array(4)
// 2. Array are 0 based
// 3. Mutating methods : push, pop, shift, unshift, splice
// 4. Non Mutating : concat, slice, flat, flatmap
// Mutating means: changing the original data itself.


const orders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
  { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
];

const myData = orders.forEach((order,index)=>{
    console.log(` #${index+1} : ${order.qty}x ${order.dish}`)
})

// console.log(myData);

const receiptLines=orders.map((o)=>`${o.dish} : $${o.price * o.qty} `)
console.log(receiptLines);

const spicyOrders = orders.filter((o)=> o.spicy)
console.log(spicyOrders);


// REDUCE
const totalRevenue = orders.reduce((sum,order)=>{
    return sum + (order.qty * order.price )
},0)
console.log(totalRevenue)

const grouped = orders.reduce((acc,order)=>{
    const category = order.spicy ? "spicy" : "mild"
    acc[category].push(order.dish)
    return acc
}, {spicy:[],mild:[]});

console.log(grouped)

const ticketNumbers = [100 , 25, 3, 42, 9];
const sortedW = [...ticketNumbers].sort((a,b)=>(a-b));
console.log(sortedW)