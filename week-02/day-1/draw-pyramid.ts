'use strict';

let lineCount: number = 4;


for( let i: number = 0; i < lineCount; i++){
       
        let str = '';

      for(let j: number = 1; j < lineCount-i; j++){

        str = str + ' ';

      }

      for( let k = 1; k <= (2*i+1); k++ ){

        str = str + '*';
      } 
    console.log(str);
};