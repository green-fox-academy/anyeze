// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

const fs = require('fs');


function readAfile(fileName: string) {

    try {

        return fs.readFileSync(fileName, 'utf-8');

    } catch (e) {
        console.log('Unable to read file: my-file.txt');
        return null;
    }
}


function printEachLine(fileName: string) {
    let fileContent: string = readAfile(fileName);

    if (fileContent !== null) {
        fileContent.split('\r\n');
    }
    return fileContent;
}
console.log(printEachLine('my-file.txt'))