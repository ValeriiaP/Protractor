// function checkAge(age) {
//     // return age > 18 ? true : 'Родители разрешили?';
//     return age > 18 || 'Родители разрешили?';
//
//     // if (age > 18) {
//     //     return true;
//     // } else {
//     //     return 'Родители разрешили?';
//     // }
// }
//
// console.log(checkAge(12))
// console.log(checkAge(18))
// console.log(checkAge(21))
//-------------------------------------

// function min(a,b){
//     // return a<b?a:b;
//     return a<b?a:b;
// }
// console.log(min(3,3))
// console.log(min(7,5))
// console.log(min(3,5))
//-------------------------------------

function pow(x,n){
    var result=x;
    for(n;n>1;n--){
        result*=x;
    }
    return result
}
console.log(pow(3,3))
console.log(pow(2,3))
console.log(pow(1,5))

