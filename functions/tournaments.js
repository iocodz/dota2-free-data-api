const config = require("../config")
const getUpcomingTournaments = require("../services/getUpcomingTournaments")

exports.handler = async function () {
    try {
        const data = await getUpcomingTournaments()
        return {
            statusCode: 200,
            headers: config.headers,
            body: JSON.stringify({
                data
            })
        }
    } catch (e) {
        return {
            statusCode: 500,
            headers: config.headers,
            body: JSON.stringify({
                e
            })
        }
    }
}