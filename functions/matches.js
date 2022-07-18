const config = require("../config")
const getUpcomingMatches = require("../services/getUpcomingMatches")

exports.handler = async function () {
    try {
        const data = await getUpcomingMatches()
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