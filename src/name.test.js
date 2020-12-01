
describe('getName function', () => {
    it('returns the name property of an object', () => {
        const name = getName(spot);

        expect(name).toEqual('spot')
    })
})