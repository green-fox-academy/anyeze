import { test } from 'tape';
import { fibonacci } from "./fibonacci";


test('testing fibonacci', t => {
    let actual = fibonacci(2);
    let expected = 1;
    t.equal(actual, expected);
    t.end();
});

test('testing fibonacci with negative number', t => {
    let actual = fibonacci(-2);
    let expected = undefined;
    t.equal(actual, expected);
    t.end();
});

