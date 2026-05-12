//pending, done(fullfill, resolve), nope(not,reject,nako)

/*
const promise = new Promise((resolve,reject)=>{
    // res("ChaiCode") //---> Promise do not get instantly fulfilled, it takes time.
    setTimeout(() => {
        // resolve("chaicode") 
        //--->at Pending in terminal,WHY??
        //Because console.log runs and this code will executed after 2sec
    
        reject(new Error("ChaiCode NOT"))
    }, 2000);
})

console.log(promise);

// setTimeout(() => { ---> but Problem her is, We don't know when will resolver get executed,
//                         here we know that it will get executed after 2sec,
//                         so accordingly we set the console.log func at 3sec.
//                         So, to resolve this promise provides you then().
//     console.log(promise)
// }, 3000);

promise.then((value)=>{
    console.log(value);
});

promise.then(console.log)
promise.then((data)=>console.log(data));
promise.then(console.log) works 
because .then() expects a function,
and console.log itself is a function.


promise.then(
    (data)=>console.log(data),
    (error)=>console.log(error),
);//old

promise
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));//New


promise
    .then((data)=>{
        newData = data.toUpperCase();
        return newData
    })
    .then((data)=>{
        return data + ".com"
    })
    .then(console.log)
    .catch((error)=>console.log(error))

*/

// -----------------------------------------------------

/*
This works because every .then() returns a NEW Promise,
and the returned value becomes the input of the next .then().

promise
   ↓
"chaicode"
   ↓
"CHAICODE"
   ↓
"CHAICODE.com"
   ↓
console.log

Key Concept :-

Each .then():

waits for previous Promise
gets previous returned value
returns new value
passes it forward
*/


const turant = Promise.resolve("Turant")
console.log(turant)

const allPromise = Promise.any([
    Promise.resolve("chai"), 
    Promise.resolve("Code"),
    Promise.reject("Error")
]);

// allPromise.then(console.log)




const allPromises = Promise.all([
    Promise.resolve("chai"), 
    Promise.resolve("Code"),
    // Promise.reject("Error")
]);

// allPromises.then((data)=>console.log(data))
// allPromises.then(console.log);


/*
const allPromisess = Promise.allSettled([
    Promise.resolve("chai"), 
    Promise.resolve("Code"),
    Promise.reject("Error")
]);

allPromisess.then(console.log)
*/

const hPromise = new Promise((res,rej)=>{
    setTimeout(() => {
        // res("Masterji")
        rej(new Error("masterjiii"));
    }, 3000);
})

//Another way to write Promises :An async function always returns a Promise automatically
/*(async function nice(){
    const result =await hPromise;
    console.log(result);
}//Does not handle reject

nice();

*/
// Await : “Pause this async function until Promise resolves.”
/*
Equivalent to :-
hPromise.then((result) => {
    console.log(result);
});
*/
// ----------------------------------------------------

//for reject
async function nice(){
    try{
        const result=await hPromise;
        console.log(result)
    }catch(error){
        console.log("Error aa gya jii",error.message)
    }
}


nice()