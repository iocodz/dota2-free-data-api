const scrapeIt = require('scrape-it')
const config = require('../config')

module.exports = async function getUpcomingMatches() {
  const scrapeResult = await scrapeIt(config.upcomingTournamentsUrl, {
    tournaments: {
      listItem: '.divRow',
      data: {
        id: {
          selector: '.divCell.Tournament b a',
          attr: 'href',
          convert: x => x.split('/dota2/')[1]
        },
        tier: 'div.divCell.Tier a',
        name: 'div.divCell.Tournament b a',
        image: {
          selector: 'div.divCell.Tournament a img',
          attr: 'src'
        },
        date: 'div.divCell.Date',
        prize: 'div.divCell.Prize',
        location: 'div.divCell.Location'
      }
    }

  });
  return scrapeResult.data
}