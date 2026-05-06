age=42;
console.log("age is",age);

var age=32;
// console.log("age is",age);

hello();  //function is called before declaration and it gives output because function is hoisted.

function hello(){
    console.log("current age",age)
}
