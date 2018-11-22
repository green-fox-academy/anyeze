'use strict';

export function add(a: number, b: number): number {
    return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

export function median(pool: number[]): number {
    let sorting = pool.sort(function (a, b) {
        return a - b;
    });
    let half = Math.floor(pool.length / 2);
   if (pool.length % 2 !== 0) {
        return sorting[Math.floor(pool.length / 2)];
    } else {
        return (pool[half - 1] + pool[half]) / 2.0;
      
    }};

    export function isVowel(character: string): boolean {
        return ['a', 'u', 'o', 'e', 'i', 'E', 'A', 'O', 'I'].some(vowel => vowel === character);
    }

    export function translate(hungarian: string): string {
        let teve = hungarian;
        let length = teve.length;
        let checkArray: string[]=[];
        for (let i = 0; i < length; i++) {
            let c = teve[i];
            if (isVowel(c) && checkArray.indexOf(c) === -1) {
                teve = teve.split(c).join(`${c}v${c}`);
                i += 2;
                length += 2;
                checkArray.push(c)
            }
        }
        return teve;
    }

