//         what is object ??
// An object in Typescript is a collection of key values, where each value is a string or any other
// type of data.
 //    For Example
  let person : {name : string ; age : number ;}= {
 name : "Marium ",
 age : 20
  }
  console.log(person.name);
  console.log(person);

  //  some example of nested objects
  // Nested objects means  :
  //     A nested object refers to an object that is a value of a property within 
  //    another object.
  let herDetail = {
 name : "Mehwish",
 age : 20,
 contact :{
    num : "021234567",
    address : " house # 98/B, street # 2"
 }
  }
// console.log(herDetail.contact.num);
// console.log(herDetail.age);
console.log(herDetail.contact.address);
console.log(herDetail.contact.num);
 
//                 ====> Array <=======
// An Array is a special variable , which can hold more than one value.
 
let person_name : string [] = ["Ahmad", "Bilal", "Imran " ];
console.log(person_name[2]);


//  Another Example.....
let info : any []=[{Name : "shumaila"}, {rollNum :34701}, {class : "IT"},{shift : '9 to 12'}]
console.log(info[3]);


   



 
