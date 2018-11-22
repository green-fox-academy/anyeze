import { test } from 'tape';
import { Apple } from './apples';

test('test the Apple class', t =>{
    const apple = new Apple;
    
    const actual = apple.getApple();
    const expected = 'apple';

    t.equal(actual, expected);
    t.end();
  });
