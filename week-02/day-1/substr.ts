'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one




function substr(str: string, keyword: string) : number {
 
  if( str.indexOf(keyword) < 0 ){
  return -1;
}else{
    console.log(str.indexOf(keyword));
}}

console.log(substr);