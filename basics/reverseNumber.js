// make reverse of the given number

let num = 479;
let s='';
while(num>0){
  s=s+num%10
  num = Math.floor(num / 10);

}
console.log(Number(s));