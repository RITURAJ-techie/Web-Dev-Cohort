/*console.log("Swastik")
Promise.resolve("resolved Value").then((v)=>{
    console.log("Microtask",v);
});

console.log("Abhi")*/

/*function boilwater(ms){
    return new Promise((resolve,reject)=>{
        console.log("Krte h ji boil water")
        if (typeof ms !== "number" || ms<0){
            reject(new Error("ms must be in number and greater than zero"))
        }
        setTimeout(()=>{
            resolve("Ubal Gaya")
        },ms)
    })
}

boilwater("dsfsd")
    .then((msg)=>console.log("Resolved:",msg))
    .catch((err)=>console.log("Rejected:",err.message));

*/


function grindLeaves(){
    return Promise.resolve("Leave grounded");
}

function steepTea(time){
    return new Promise((res)=>{
        setTimeout(()=>{
            res("steeped tea")
        },time);
    });
}

function addSugar(spoons){
    return `Added ${spoons} sugar`;
}
/*
grindLeaves()
.then((data)=>{
    console.log(data);
    return steepTea(2000);
})
.then((data)=>{
    console.log(data);
    return addSugar(2)
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

*/

async function makeTea() {

    const leaves = await grindLeaves();
    console.log(leaves);

    const tea = await steepTea(2000);
    console.log(tea);

    const sugar = addSugar(2);
    console.log(sugar);
}

makeTea();