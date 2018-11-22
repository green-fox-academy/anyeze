import { test } from 'tape';
import { Sum } from './sum';

/*Follow these steps:
Add a new test case
Instantiate your class
create a list of integers
use the t.equal to test the result of the created sum method
Run it
Create different tests where you
test your method with an empyt list
with a list with one element in it
with multiple elements in it
with a null
with a string
Run them
Fix your code if needed*/


let newList: number[] = [5, 10, 15];
let emptyList: number[] = [];
let oneElementList: number[] = [35];
//let nullList: number[]=[null];
let list = new Sum;

test('the sum method', t => {
    const actual = list.theSum(newList);
    const expected = 30;
    t.equal(actual, expected);
    t.end();
});

test('test with empty list', t => {
    const actual = list.theSum(emptyList);
    const expected = 0;
    t.equal(actual, expected)
    t.end();
})

test('test with one element list', t => {
    const actual = list.theSum(oneElementList);
    const expected = 35;
    t.equal(actual, expected)
    t.end();
})

test('test with one element list', t => {
    const actual = list.theSum(null);
    const expected = 0;
    t.equal(actual, expected)
    t.end();
})
test('test with one element list', t => {
    const actual = list.theSum(undefined);
    const expected = 0;
    t.equal(actual, expected)
    t.end();
})