import { isBoolean } from "util";

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
const fs = require('fs');

function copyFile(fromFileName: string, toFileName: string) {

    if (fs.existsSync(fromFileName) && fs.existsSync(toFileName)) {
        
        fs.copyFileSync(fromFileName, toFileName);
        console.log("true");

    } else {

        console.log("false");

    }
}
copyFile("my-file.txt", "copyto.txt");