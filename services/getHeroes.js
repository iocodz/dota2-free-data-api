const scrapeIt = require('scrape-it')
const config = require('../config')

module.exports = async function getTeams() {
  const scrapeResult = await scrapeIt(config.heroesURL, {
    heroes: {
      listItem: 'ul.halfbox li',
      data: {
        id: {
          selector: 'span a',
          attr: 'href',
          convert: x => x.split('/')[2]
        },
        name: {
          selector: 'span a',
          attr: 'title'
        },
        image: {
          selector: 'a img',
          attr: 'src'
        }
      }
    }
  })
  return scrapeResult.data
}