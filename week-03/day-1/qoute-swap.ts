'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

// Expected output: "What I cannot create I do not understand."

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
let word1: string = 'cannot';
let word5: string = 'do';
    
function quoteSwap(arr){
    let word2: string = 'cannot';
    let word5: string = 'do';

    arr.splice(word5, 1, arr.splice(word2, 1, arr[word5])[0]);

    return arr;

} 
    

console.log(quoteSwap(words));


export = quoteSwap;