const scrapeIt = require('scrape-it')
const config = require('../config')

module.exports =  async function getUpcomingMatches() {
    const scrapeResult = await scrapeIt(config.upcomingMatchesUrl, {
        matches: {
            listItem: '.infobox_matches_content',
            data: {
                first: '.team-left span.team-template-text',
                second: '.team-right span.team-template-text',
                firstImage: {
                    selector: '.team-left span.team-template-image-icon a img',
                    attr: 'src'
                },
                secondImage: {
                    selector: '.team-right span.team-template-image-icon a img',
                    attr: 'src'
                },
                startDate: {
                    selector: '.match-countdown span.timer-object',
                    attr: 'data-timestamp'
                },
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