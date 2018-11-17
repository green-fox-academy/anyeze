'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
    { name: 'Amanda', alcohol: 10, guns: 1 },
    { name: 'Mark', alcohol: 0, guns: 0 },
    { name: 'Dolores', alcohol: 0, guns: 1 },
    { name: 'Wade', alcohol: 1, guns: 1 },
    { name: 'Anna', alcohol: 10, guns: 0 },
    { name: 'Rob', alcohol: 2, guns: 0 },
    { name: 'Joerg', alcohol: 20, guns: 0 }
];

function securityCheck(queue: any[]): any [] {

    let theyCanEnter: any[] = [];

        for (let i = 0; i < queue.length; i++) {
    
            if (queue[i].guns > 0) {

                watchlist.push(queue[i].name);

            } else if (queue[i].alcohol !== 0) {

                securityAlcoholLoot += queue[i].alcohol;
                queue[i].alcohol = 0;
                theyCanEnter.push(queue[i].name);

            } else {

                theyCanEnter.push(queue[i].name);
        }
    }

    return theyCanEnter;
}

console.log("They can enter to the festival:", securityCheck(queue));
console.log("They can\'t enter, they are on the watchlist:", watchlist);
console.log("Security alcohol loot is:", securityAlcoholLoot, "unit");
export = securityCheck;