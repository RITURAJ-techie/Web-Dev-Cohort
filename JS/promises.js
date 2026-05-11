// function prepareOrderCB(dish, cb) {
//     setTimeout(() => {
//         cb(null, {
//             dish,
//             status: "prepared"
//         });
//     }, 100);
// }

// // cb means callback function.
// // It is a function passed into another function to run later.
// // prepareOrderCB("Biriyani", (err, order) => {})


// function pickupOrderCB(order, cb) {
//     setTimeout(() => {
//         cb(null, {
//             ...order,
//             status: "picked-up"
//         });
//     }, 100);
// }

// function deliverOrderCB(order, cb) {
//     setTimeout(() => {
//         cb(null, {
//             ...order,
//             status: "delivered"
//         });
//     }, 100);
// }


// // Start Process
// prepareOrderCB("Biriyani", (err, order) => {

//     if (err) {
//         return console.log(err);
//     }

//     console.log("Step 1:", order);

//     pickupOrderCB(order, (err, order) => {

//         if (err) {
//             return console.log(err);
//         }

//         console.log("Step 2:", order);

//         deliverOrderCB(order, (err, order) => {

//             if (err) {
//                 return console.log(err);
//             }

//             console.log("Step 3:", order);

//             console.log(`${order.dish}: ${order.status}`);
//         });

//     });

// });


// Promise could be : Success , fail , on-hold

// In JS:
// pending , fulfilled , rejected


function prepareOrder(dish){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (!dish){
                reject(new Error("No dish is there"))
                return;
            }
            console.log(`${dish} is ready`);
            resolve({dish, status : "Prepared"})
        },100)
    });
}


function pickupOrder(order){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${order} is ready`)
            resolve({...order, status : "Picked-Up"})
        },100)
    });
}


function delivereOrder(order){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${order} is ready`);
            resolve({...order, status : "Delivered"})
        },100)
    });
}