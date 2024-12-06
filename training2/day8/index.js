// console.log("hello");
// let arr = [1,3,45,6,2,2];  
// console.log(arr);
// const sample = arr[7];
// console.log(sample);
// arr.splice(2,1,);
// console.log(arr);
// let trash = 45;
// for(let i = 0;i<6;i++){
//     if(arr[i]==trash)
//         arr.splice(i,1);
// }
// console.log(arr);
// for(let i =0;i<arr.length;i++){
//     let arr2 = arr[i]+1;
//     console.log(arr2);

let arr2 = [1,2,3,4,5,7,8];
// for(let i=0;i<arr2.length;i++){
//     if(arr2[i+1]-arr2[i]!==1){
//         console.log(arr2[i]+1);
//         break;
//     }

// }
let id_card = {
    Name :"Anshuman Tiwari",
    Rollnumber : "247030",
    Address : "earth",
    DOB : "12-02-2007",
    Branch : "aiml"

}
// const naam = id_card["Name"];
// console.log(naam);
// const roll = id_card.Rollnumber;
// console.log(roll);
// const add = id_card.Address;
// console.log(add);
// const dob = id_card.DOB;
// console.log(dob);
// const branch = id_card.Branch;
// console.log(branch);
id_card.id = 32;
id_card.Result = "passed";
id_card.Rollnumber = "244030";

delete id_card.DOB;
console.log(id_card);
