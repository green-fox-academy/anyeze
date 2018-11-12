// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
export { };
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

    let fileContent: string = readAfile(fileName);
    let lines: string[] = fileContent.split('\r\n');
    let result: any[] = [];
    let ipAdresses: string[] = [];



    for (let i = 0; i < lines.length; i++) {

        result.push(lines[i].split("   "));
        ipAdresses.push(result[i][1]);
    }

    let uniqueIpResult = ([... new Set(ipAdresses)]);
    return uniqueIpResult;

}
console.log(uniqueIp("logs.txt"));

function ratio(fileName: string) {

    let fileContent: string = fs.readFileSync(fileName, "utf-8").split("\n");
    let getCount: number = 0;
    let postCount: number = 0;

    for (let i = 0; i < fileContent.length; i++) {
        if (fileContent[i].includes('GET /')) {
            getCount += 1;
        } else if (fileContent[i].includes('POST /')) {
            postCount += 1;
        }

    }
    return "The GET / POST ratio is:  1 : " + postCount / getCount;
}

console.log(ratio('logs.txt'));
