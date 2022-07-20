const scrapeIt = require('scrape-it')
const config = require('../config')

module.exports = async function getItems() {
  const scrapeResult = await scrapeIt(config.itemsURL, {
    items: {
      listItem: 'div.row div div.responsive',
      data: {
        id: {
          selector: 'a',
          attr: 'href',
          convert: x => x.split('/')[2]
        },
        name: {
          selector: 'a img',
          attr: 'alt'
        },
        image: {
          selector: 'a img',
          attr: 'src'
        },
        price: 'font b'
      }
    }
  })
  return scrapeResult.data
}