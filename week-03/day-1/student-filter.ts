'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function whoHasmore(list: any){

    let moreCandies = [];
    for(let i = 0; i < list.length; i++){
            if(list[i].candies > 4){

            moreCandies.push(list[i].name);
        }
        
    }return moreCandies;
}
console.log(whoHasmore(students));


function averageCandies(list: any){
        let candy= 0;
        for(let i = 0; i< list.length; i++){

            candy = (candy+list[i].candies);
        }
return candy/list.length;

}

console.log(averageCandies(students));