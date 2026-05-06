// let age=24;
// age=35;
// console.log("age is", age)

// const ageis=23;
// console.log("age is", ageis)


// function sayHello(){
//     console.log("hello Harsh");
// }

// sayHello();

// function greet(x,y){
//     console.log(`Hii ${x} and ${y}`);
// }

// greet('harsh','megha')


// function number(num1,num2){
//     const result=(num1+num2);
//     return result;
// }

// a=number(2,5);
// console.log(a);


// function cartoon(){
//     function cartoonInsideTheCartoon(){
//         return "Naruto";
//     }
//     return cartoonInsideTheCartoon;
// }

// const anime = cartoon();
// // console.log(anime);
// const r=anime();
// console.log(r);

// cartoon() is executed.
// It returns the inner function cartoonInsideTheCartoon.
// That returned function is stored in the variable anime.
// Now you're calling the function stored in anime.
// That means cartoonInsideTheCartoon() runs.
// It returns "Naruto".



// function cartoon(){
//     function cartoonInsideTheCartoon(){
//         return "Naruto";
//     }
//     return cartoonInsideTheCartoon();
// }

// const anime = cartoon();  //Here you are calling the func inside return statement and it will return string because function is called.
// // console.log(anime);
// console.log(anime); 


//Another way to write function

// let cartoon=function(){
//     console.log("Anime");
// }
// cartoon(); // return Anime


// age=56;
// console.log("value of age is",age ,"Is allowed?", isAllowedToVote(age));
// var age=12;

// function isAllowedToVote(){
//     return age>=18;
// } Code Wroks here because in case of function it's whole body gets hoist.

// age=56;
// console.log("value of age is",age ,"Is allowed?", isAllowedToVote(age)==undefined);
// var age=12;                                                  

// var isAllowedToVote=function(){
//     return age>=18;
// } Code throughs an error because func is inside var and in case of variable only variable declaration hoists, not it's value.

//Arrow Functions
// const isUserAllowedToOpenBackBalance = (age,balance) => age>=18 && balance>=6000;
// console.log(isUserAllowedToOpenBackBalance(44,8000)); 


// const fruits = ['apple','mango','santra',1,true,'kiwi','cheeku'];

//forEach Functions

// for (let i=0 ; i<fruits.length;i++){
//     console.log(fruits[i]);
// }
//-----------------------------------------------------------

// function sbkoPrintKrdo(element){
//     console.log(element);
// }
// fruits.forEach(sbkoPrintKrdo);

//------------------------------------------------------------

// fruits.forEach(function sbkoPrintKrdo(element){
//     console.log(element);
// })

//-------------------------------------------------------------

// fruits.forEach((Element) => console.log(`--> ${Element}`))

//--------------------------------------------------------------
// function forEach(bataoKyaKrnaHai){
//     for (let i=0 ; i<fruits.length; i++){
//         bataoKyaKrnaHai(fruits[i]);
//     }
// }
// fruits.forEach(element => {
//     console.log(`----> ${element}`)
    
// });
//---------------------------------------------------------------

//Map Functions

// const nums=[1,2,3,4,5,6];

// const result=[];

// for (let i=0 ; i<nums.length ; i++){
//     result.push(nums[i]*2);
// }
// console.log(result)

// const res=nums.map((e)=>e*2)
// console.log(res)


//-----------------------------------------------------------------

//Basic Array Functions

// fruits.push('banana');
// console.log(fruits[5]);
// console.log(fruits.length);
// console.log(fruits.includes('banana'));

// const firstElement = fruits.shift();
// console.log(firstElement);

// const slicing=fruits.slice(2,5);
// console.log(slicing);

// fruits.unshift('2','3')
// console.log(fruits);

// console.log(fruits.indexOf('mango'))

//----------------------------------------------------------

//high order function
// function meraPyaraFunction(udharKaFunction){
//     return udharKaFunction()+40;
// 
// function doraemon(){
//     return 50;
// }
// console.log(meraPyaraFunction(doraemon)); 
// }
//-------------------------------------------------------


//Practise Codes
//1.
// const num2 = [3,10,24,80,90,34,67]

// const result2 = num2.forEach(function(e){
//     if (e%2===0){
//         console.log(e);
//     }
// })

// console.log(result2);

//2.

// const nums = [3, 10, 24, 90];

// const result = map(e => e * 10 + 1);

// function map(fn) {
//     const result = [];

//     for (let i = 0; i < nums.length; i++) {
//         const currentElement = nums[i];
//         const num = fn(currentElement);
//         result.push(num);
//     }

//     return result;
// }

// console.log(result);