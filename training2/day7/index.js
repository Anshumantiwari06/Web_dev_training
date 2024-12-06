// const num1 = prompt("Enter a number");
// console.log(num1);
// let i ;
// if(num1>0){
//     for(i = num1;i>0;i--){
//         console.log(i);
// }

// }else{
//     console.log("number is invalid")
// }
// const second = document.getElementById("h1");
// const a = "Hell world";
// const newContent = "Hello world";
// h1.innerText = newContent;
// const elements = document.getElementsByClassName("second")
// console.log(elements[1]);
// const newContent2 = "Hello India";
// elements[1].innerText = newContent2;
const cw = document.getElementsByClassName("second");
console.log(cw);

const oddThing = "odd";
const eventhing = "even";
const element = document.getElementsByClassName("second");
console.log(element.length);
let i;
for(let i = 0;i<element.length;i++){
    if(i%2==0){
        element[i].innerHTML = eventhing;
    }else{
        element[i].innerHTML = oddThing;
}
}












