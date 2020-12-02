const request = require('superagent');

const fetchQuotes = async() => {
    const response = await request.get('http://futuramaapi.herokuapp.com/api/quotes');

    const results = response.body[0];
    
    const firstQuote = {
            name: results.character,
            text: results.quote,
            image: results.image,
    };
    
    return firstQuote;
}

module.exports = {
    fetchQuotes
};