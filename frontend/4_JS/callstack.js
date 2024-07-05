//Callstack in JavaScript

// function one() {
//     return 1;
// }

// function two() {
//     let ans = one() + one();
//     return ans;
// }

// function three() {
//     let ans = two() + one();
//     return ans;
// }

// function four(){
//     let ans = two() + two();
//     return ans;
// }

// //calling functions

// console.log(three());

// console.log(four());


// //Callback hell

// function h1ChangeColor(color, delay, nextColorChange){
//     setTimeout(()=>{
//         document.querySelector("h1").style.backgroundColor = color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }

// h1ChangeColor("red", 1000, ()=>{
//     h1ChangeColor("purple", 1000, ()=>{
//         h1ChangeColor("orange", 1000, ()=>{
//             h1ChangeColor("indigo", 1000);
//         })
//     })
// })



