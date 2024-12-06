
// const h1 = document.getElementById("heading");

// function sumFun(a,b){
//     const sum = a+b;
//     console.log("---sum--- :", sum);
//     h1.innerHTML = `Sum: ${sum}`;
//     return sum;
// }
// function subFun(a,b){
//     const sub = a-b;
//     h1.innerHTML = `Difference: ${sub}`;
//     return sub;
// }
// function dltcontent(){
//     h1.innerHTML = "";
// }

const n1 = 5;
const n2 = 6;
console.log(n1);
try{
    n1=6;
}catch(error){
console.log(error.message);
}




// console.log(n2);
// console.log("Hello world");
// console.log("new");


// setInterval
// setTimeout

const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Sorry!!🍆");
    },2000);
});

// console.log(myPromise);
// myPromise.then((value)=>{
//     console.log(value);
// })

// .catch((error)=>{
//     console.log(error);
// });

console.log("promise start 54");
const promisefun = async ()=>{
    const value = await myPromise();
    console.log(value);

};

promisefun();
console.log("promise end 62");



