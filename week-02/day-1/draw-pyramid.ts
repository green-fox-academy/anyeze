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



//let lineCount: number = 4;
//let star: string = '*';
//let space: string = ' ';

//for (let i = 1; i <= lineCount; i++) {

//  let spaceCount: number = lineCount - i;
//    let starCount: number =  (i - 1) * 2 + 1;
//    let pyramid: string = space.repeat(spaceCount) + star.repeat(starCount);
//    console.log(pyramid);

