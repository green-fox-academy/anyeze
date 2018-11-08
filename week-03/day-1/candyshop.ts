'use strict';
export {};



// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

let shopItems: any [] = ['Cupcake', 2, 'Brownie', false];


function sweets(array){

        let newArray = array.map(function(element){

                if(typeof element === 'number'){
                        return "Croissant";
                }else if(typeof element === "boolean"){

                        return 'Ice cream';
                }

                return element;})


         return newArray;}


                console.log(sweets(shopItems));    


                // first solution
                //function sweets(list: any [] ){

                //        list.splice(1, 1, "Croissant" );
                //        list.splice(3, 1, "Ice cream");
                      
                //        return list;
                    
                //    }
                    
                    
                //  console.log(sweets(shopItems));
                    
                  export = sweets;