import scrapeIt from "scrape-it";
import { LIQUIPEDIA_UPCOMING_URL } from "../config";

export async function getUpcomingMatches() {
    const scrapeResult = await scrapeIt(LIQUIPEDIA_UPCOMING_URL, {
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