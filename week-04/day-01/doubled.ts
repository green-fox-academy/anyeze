// Create a method that decrypts duplicated-chars.txt
export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
    try {
      return fs.readFileSync(fileName, 'utf-8');
    } catch(e) {
      console.log(e.message);
      return null;
    }
  }

  function deleteDoubled(fileName:string){
    let fileContent = readFromFile(fileName);
   
    for(let i = 0; i < fileContent.length; i++){
        let notDoubled: string[]= [];
        notDoubled.push(fileContent.slice(i+2,0));

    } 
  }

  console.log(deleteDoubled("duplicated-chars.txt"));




