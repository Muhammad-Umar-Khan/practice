// function factorial(n){
//     if(n === 0 || n === 1){
//         return 1;
//     }
//     return n * factorial(n-1);
// }

// console.log(factorial(5));

// console.log("Hello world with a new perspective")

const currentTime = new Date();
const fiveMinutesAgo = new Date(currentTime.getTime() - 5 * 60 * 1000);
const unixTimestamp = Math.floor(fiveMinutesAgo.getTime() / 1000);
console.log(unixTimestamp);
