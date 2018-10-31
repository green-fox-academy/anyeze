// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrix = [];
let row : number = 4;

for(let i: number = 0; i < row; i++) {
    
    let line: number [] =[];

for ( let j: number = 0; j< row; j++ ){
        
        if(i+j === row-1){
            line.push(1)
        }else{
            line.push(0);
        }
    }
        matrix.push(line);
        };
        matrix.map(e=>(console.log(e)));


