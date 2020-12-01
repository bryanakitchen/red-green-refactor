const { capitalizeAndFilter } = require('./cap');

describe('capitalizeAndFilter function', () => {
    it('capitalizeAndFilter takes an array of strings capitalize all strings and filter out any string that starts with the letter f', () => {
        const array = ['spot', 'rover', 'bingo', 'fred'];

        const result = capitalizeAndFilter(array);

        expect(result).toEqual(['SPOT', 'ROVER', 'BINGO'])
    })
})