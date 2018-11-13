import { Thing } from "./things";
import { Fleet } from "./fleet";

let fleet = new Fleet();

let listOfThings: Thing[] = [
    new Thing('Get milk'),
    new Thing('Remove the obstacles'),
    new Thing('Stand up'),
    new Thing('Eat lunch')

]

for (let i = 0; i < listOfThings.length; i++) {
    fleet.add(listOfThings[i]);
    
    if (i >= 2) {
        listOfThings[i].complete();
    }
}

fleet.things.forEach(function (element) {
    if (element.completed) {
        console.log('[x]' + element.name);
    } else {
        console.log('[]' + element.name);
    }
})

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

