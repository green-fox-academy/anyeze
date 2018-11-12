// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
export{};
const fs = require('fs');


function readAfile(fileName: string) {

    try {

        return fs.readFileSync(fileName, 'utf-8');

    } catch (e) {
        console.log('Unable to read file: my-file.txt');
        return null;
    }
}

function uniqueIp(fileName: string) {

    let fileContent: string = readAfile("logs.txt");
    let lines: any[] = fileContent.split('\r\n');

    let ipAdresses: any[] = [];
    let result: string[] = [];

    for (let i = 0; i < lines.length; i++) {

        ipAdresses.push(lines[i].split(" "));
        
        result.push(ipAdresses[i][9]);

    } 

    console.log(result);
    return result;
}
console.log(uniqueIp("logs.txt"));
