const scrapeIt = require('scrape-it')
const config = require('../config')

module.exports = async function getUpcomingMatches() {
  const scrapeResult = await scrapeIt(config.upcomingMatchesUrl, {
    matches: {
      listItem: '.infobox_matches_content',
      data: {
        first: '.team-left span.team-template-text',
        second: '.team-right span.team-template-text',
        firstID: {
          selector: '.team-left span.team-template-image-icon a',
          attr: 'href',
          convert: x => x.split('/')[2]
        },
        secondID: {
          selector: '.team-right span.team-template-image-icon a',
          attr: 'href',
          convert: x => x.split('/')[2]
        },
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
          attr: 'data-timestamp',
          convert: x => new Date(x * 1000)
        },
        tournamentName: '.match-filler div div a',
        tournamentId: {
          selector: '.match-filler div div a',
          attr: 'href',
          convert: x => x.split('/dota2/')[1]
        },
        status: '.versus div'
      }
    }
  });
  const response = scrapeResult.data.matches.map(match => {
    return {
      firstTeam: {
        id: match.firstID,
        name: match.first,
        image: match.firstImage
      },
      secondTeam: {
        id: match.secondID,
        name: match.second,
        image: match.secondImage
      },
      tournament: {
        id: match.tournamentId,
        name: match.tournamentName
      },
      startDate: match.startDate,
      status: match.status
    }
  })
  return response;
}