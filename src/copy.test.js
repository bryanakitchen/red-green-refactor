const { copyAndPush } = require('./copy.js');

describe('copyAndPush function', () => {
    it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
        const numbers = [1, 2, 3];

        const result = copyAndPush(numbers, 4);

        expect(result).toEqual([1, 2, 3, 4])
    })
    it('returns original array to ensure it was not changed', () => {
        const originalArray = [1, 2, 3];

        copyAndPush(originalArray, 4);

        expect(originalArray).toEqual([1, 2, 3])
    })
})