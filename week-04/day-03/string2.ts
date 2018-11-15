// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function change2(str: string){

    if( str.indexOf('x') === -1){
       
        return str;

    }else{

        return change2(str.replace('x', ' '));
    
    }

}
let exampleString2 = " xoxoxoxoxoxoxo yoyoyoyoyoyoyoyoyoyo "

console.log(change2(exampleString2));