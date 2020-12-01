const { getName } = require('./name');

describe('getName function', () => {
    it('returns the name property of an object', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' };

        const name = getName(spot);

        expect(name).toEqual('spot')
    })
    it('returns the name property of an object', () => {
        const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
        const name = getName(character);

        expect(name).toEqual('Aang')
    })
})