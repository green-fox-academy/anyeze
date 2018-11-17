// Create a method that decrypts duplicated-chars.txt
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

function deleteDoubled(fileName: string) {
  let fileContent: string[] = readFromFile(fileName).split('');
  let minusDoubled: string[] = [];

  fileContent.forEach(function (e, i) {
    if (i % 2 !== 0) {
      minusDoubled.push(e);
    }

  })
  return minusDoubled.join('');


  /*for (let i = 0; i <= lines.length; i++) {

    if (i % 2 !== 0) {
      minusDoubled.push(lines[i]);
    }
    return minusDoubled.join('');

  }*/
}
console.log(deleteDoubled("duplicated-chars.txt"));

