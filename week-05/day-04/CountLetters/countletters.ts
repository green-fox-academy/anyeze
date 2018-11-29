/*Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, 
and numbers as values that shows how many occurrences there are.
Create a test for that.*/



/*function countLetters(words: string) {

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
}*/

function countLetters(words: string) {
    let splitWord: string[] = words.toLowerCase().split('');
    let result = {};

    splitWord.forEach(element => {
        if (element in result) {
            result[element]++;
        } else if (element !== ' ') {
            result[element] = 1;
        }
    });
    return result;
}

console.log(countLetters('almafácskadejófácska'));

export { countLetters }