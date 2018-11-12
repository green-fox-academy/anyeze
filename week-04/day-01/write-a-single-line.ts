// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require('fs');



function writeAline(fileName: string, data: string){
    
    if(fs.existsSync(fileName)){
        return fs.appendFileSync(fileName, data);
    }else{
        console.log('Unable to write file: my-file.txt');
    }
   
}
writeAline("my-file.txt", "Molnár Ágnes");