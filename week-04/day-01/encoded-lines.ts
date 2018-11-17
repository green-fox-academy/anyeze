// Create a method that decrypts encoded-lines.txt

export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName, 'utf-8');
    } catch (e) {
        console.log(e.message);
        return null;
    }
}

function encodedLines(fileName: string){

}