const getUpcomingMatches = require("../utils/getUpcomingMatches")

exports.handler = async function () {
    try {
        const data = await getUpcomingMatches()
        return {
            statusCode: 200,
            body: JSON.stringify({
                data
            })
        }
    } catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                e
            })
        }
    }
}