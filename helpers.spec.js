const { reverseString } = require('./helpers');

describe('Jest', () => {
    test('Jest runs', () => {

    });
});


it('returns a string', () => {
    expect(2 + 2).toBe(4);

    const obj1 = { name: 'Jasmine' };
    const obj2 = { name: 'Jasmine' };
    //    expect(obj1).toBe(obj2); // false, checks for the same reference
    expect(obj1).toEqual(obj2); // true, checks for equility(deep) 
});

test('returns a string', () => {

    // arrange: setup the world
    const input = 'kam';

    //act: execute the code you're testing

    const result = reverseString(input);

    // assert: check that it works

    expect(typeof result === 'string').toBeTruthy();
});


test('reverses properly', () => {
    const input = 'dog';
    const expected = 'god';

    const actual = reverseString(input);
    expect(actual).toBe(expected);
});


test('throws an error if given non-string', () => {
    expect(() => reverseString(['hello'])).toThrow();
})

//pre-test
// 1. SUmmarize whta your function does
// 2. Write function signature

//Test
// 1. Get Red - write test, have it fail
// 2. Get Green - fix thing that's getting tested, have it pass
// 3. Refactor- optional, make it better, keep it green