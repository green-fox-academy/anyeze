import { test } from 'tape';
import { anagram } from "./anagram";

let string1 = "abc";
let string2 = "cba";
let string3 = "Abc";
let string4 = "aBc";

test('test anagram', t => {
    let actual = anagram(string1, string2);
    let expected = true;
    t.equal(actual, expected);
    t.end();
});


test('test anagram with  capital letters', t =>{
    let actual = anagram(string3, string4);
    let expected = true;
    t.equal(actual, expected);
    t.end();
})