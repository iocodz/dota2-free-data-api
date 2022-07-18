const scrapeIt = require('scrape-it')
const config = require('../config')

module.exports = async function getTeams() {
  const scrapeResult = await scrapeIt(config.teamsUrl, {
    teams: {
      listItem: '.panel-box-body div',
      data: {
        id: {
          selector: '.team-template-text a',
          attr: 'href',
          convert: x => x.split('/')[2]
        },
        name: '.team-template-team-standard .team-template-text a',
        logo: {
          selector: '.team-template-image-icon a img',
          attr: 'src'
        }
      }
    }

  });
  return scrapeResult.data
}