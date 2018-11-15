// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.


function change(str: string){

    if( str.indexOf('x') === -1){
       
        return str;

    }else{

        return change(str.replace('x', 'y'));
    
    }

}
let exampleString = " xoxoxoxoxoxoxo yoyoyoyoyoyoyoyoyoyo "

console.log(change(exampleString));