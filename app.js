//         what is object ??
// An object in Typescript is a collection of key values, where each value is a string or any other
// type of data.
//    For Example
var person = {
    name: "shumaila ",
    age: 26
};
console.log(person.name);
console.log(person);
//  some example of nested objects
// Nested objects means  :
//     A nested object refers to an object that is a value of a property within 
//    another object.
var herDetail = {
    name: "Mehwish",
    age: 20,
    contact: {
        num: "021234567",
        address: " house # 98/B, street # 2"
    }
};
// console.log(herDetail.contact.num);
// console.log(herDetail.age);
console.log(herDetail.contact.address);
console.log(herDetail.contact.num);
//                 ====> Array <=======
// An Array is a special variable , which can hold more than one value.
var person_name = ["Ahmad", "Bilal", "Imran "];
console.log(person_name[2]);
//  Another Example.....
var info = [{ Name: "shumaila" }, { rollNum: 34701 }, { class: "IT" }, { shift: '9 to 12' }];
console.log(info[3]);
