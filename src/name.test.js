const { getName } = require('./name');

describe('getName function', () => {
    it('returns the name property of an object', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' };

        const name = getName(spot);

        expect(name).toEqual('spot')
    })
})