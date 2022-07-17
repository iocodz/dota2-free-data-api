const scrapeIt = require('scrape-it')
const config = require('../config')

module.exports =  async function getUpcomingMatches() {
    const scrapeResult = await scrapeIt(config.upcoming_url, {
        matches: {
            listItem: '.infobox_matches_content',
            data: {
                first: '.team-left span.team-template-text',
                second: '.team-right span.team-template-text',
                tournamentName: '.match-filler div div a',
                tournamentLink: {
                    selector: '.match-filler div div a',
                    attr: 'href'
                },
                status: '.versus div'
            }
        }

    });
    return scrapeResult.data
}