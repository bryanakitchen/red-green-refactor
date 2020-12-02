const { fetchQuotes } = require('./fetch');

describe('fetchQuotes function', () => {
    it('returns a single quote with specific format from Futurama Quote API', async() => {
        const quote = {
            name: 'Bender',
            text: 'I\'m a fraud. A poor, lazy, sexy fraud.',
            image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
        }

        const result = await fetchQuotes(quote);

        expect(result).toEqual({
            name: 'Bender',
            text: 'I\'m a fraud. A poor, lazy, sexy fraud.',
            image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
        })
    })
})