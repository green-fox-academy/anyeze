'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let insertString: string = "always takes longer than";

quote = quote.substring(0,21) + insertString + quote.substring(20,82);

console.log(quote);