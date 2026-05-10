const aadhar_of_harsh = Symbol("aadhar")
const aadhar_of_golu = Symbol("aadhar")

console.log(typeof aadhar_of_golu);
console.log(aadhar_of_golu === aadhar_of_harsh);//Gives Unique value, Label could be same
console.log(aadhar_of_golu.toString());
console.log(aadhar_of_golu.description);

const nonIndian = Symbol()
console.log(nonIndian.description)

const biometricHash = Symbol("biomertricHash")
const bloodGroup = Symbol("BloodGroup")

const citizenRecord = {
    name : "Ved Pandey",
    age : 21,
    [biometricHash] : "as6a8f6sa",
    [bloodGroup] : "O +ve"
}

console.log(Object.keys(citizenRecord)) // Symbol : keys are not visible properties
console.log(Object.getOwnPropertySymbols(citizenRecord))