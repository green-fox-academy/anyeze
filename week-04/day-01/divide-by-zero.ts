// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

const fs = require('fs');

function divideBy(a: number): number{
    if(a === 0){
        throw new Error ("fail");
    }
    return (a/10);
}
try{
    console.log(divideBy(0));
}catch(e){
    console.log(e.message);

};