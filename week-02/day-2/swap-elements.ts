
let abc: string[]=["Arthur", "Boe", "Chloe"];
let temp: string=abc[0]; 

abc.splice(0,1);
abc.push(temp);

console.log(abc);