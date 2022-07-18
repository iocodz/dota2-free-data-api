const scrapeIt = require('scrape-it')
const config = require('../config')

module.exports = async function getTeam(id) {
  const scrapeResult = await scrapeIt(`${config.teamUrl}/${id}`, {
    teams: {
      listItem: '#main-content',
      data: {
        name: '#firstHeading span',
        country: {
          selector: '.infobox-cell-2 .flag a',
          attr: 'title'
        },
        created: {
          selector: '.infobox-cell-2',
          texteq: 'Approx. Total Winnings:',
          convert: x => x.split('Created:')[1].trim()
        },
        totalWinnings: {
          selector: '.infobox-cell-2',
          texteq: 'Approx. Total Winnings:',
          convert: x => x.split('Total Winnings:')[1].split('Created:')[0].trim()
        },
        activeRoster: {
          selector: '.roster-card tbody',
          eq: 0,
          listItem: 'tr.Player',
          data: {
            id: {
              selector: 'td.ID b span a',
              attr: 'href',
              eq: 1,
              convert: x => x.split('/')[2]
            },
            name: 'td.Name',
            country: {
              selector: 'td.ID b span a',
              attr: 'href',
              eq: 0,
              convert: x => x.split(':')[1]
            },
            position: 'td.Position',
            joinDate: 'td.Date .Date i',
          }
        },
        archivements: {
          listItem: '.achievements table tbody tr',
          data: {
            place: {
              selector: 'td',
              eq: 1,
            },
            date: {
              selector: 'td',
              eq: 0
            },
            tournament: {
              data: {
                id: {
                  selector: 'a',
                  attr: 'href',
                  convert: x => x.split('/dota2/')[1],
                },
                name: {
                  selector: 'a',
                  attr: 'title',
                },
                logo: {
                  selector: 'a img',
                  attr: 'src',
                }
              },
              selector: 'td',
              eq: 3,
            },
            prize: {
              selector: 'td',
              eq: 7,
            }
          }
        }
      }
    }
  });
  scrapeResult.data.teams[0].id = id
  scrapeResult.data.teams[0].activeRoster = scrapeResult.data.teams[0].activeRoster.slice(0, 5)
  scrapeResult.data.teams[0].archivements = scrapeResult.data.teams[0].archivements.slice(1, -1)

  return scrapeResult.data
}