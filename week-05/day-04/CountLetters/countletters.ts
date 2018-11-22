/*Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, 
and numbers as values that shows how many occurrences there are.
Create a test for that.*/



function countLetters(words: string) {

    let result = {};
    words.split(" ").forEach(function (e) {
        result[e] = {};
        e.split("").forEach(c => {
          
            if (!result[e][c]) {
                result[e][c] = 0;
            }
            result[e][c]++;
        });
    });
    return result;
}



export { countLetters }