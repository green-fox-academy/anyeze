/*Create a sum method in your class which has a list of integers as parameter
It should return the sum of the elements in the list*/

class Sum {

    theSum(newList: number[]): number {

        if (newList !== null && newList !== undefined) {
            let sumOfElements: number = 0;
            newList.forEach(element => {
                sumOfElements += element;
            })
            return sumOfElements;
        } else {
            return 0;
        }
    }
};


export { Sum };