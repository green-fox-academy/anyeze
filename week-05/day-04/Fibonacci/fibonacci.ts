/*Write a function that computes a member of the fibonacci sequence by a given index
Create tests that covers all types of input (like in the previous workshop exercise)*/


function fibonacci(n: number): any {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else if (n < 0) {
        return undefined;
    }else if(typeof n !== 'number'){
        return "Provide a number";
    } else {
        return (fibonacci(n - 1) + fibonacci(n - 2));
    }
}

console.log(fibonacci(2));

export { fibonacci };