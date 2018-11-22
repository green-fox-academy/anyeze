/*Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
Create a test for that.*/

function anagram(str1: string, str2: string): boolean {
   return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")
  
}

export { anagram };
