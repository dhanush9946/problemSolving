// find the biggest digit in a number

let num = 948;
let n = 0;
let large = 0;

while(num>0){
 n = num % 10;
 
 if(n>large){
  large = n;
 }
 num = Math.floor( num / 10);
}
console.log(large);