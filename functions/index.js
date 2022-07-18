const getUpcomingMatches = require("../utils/getUpcomingMatches")

exports.handler = async function () {
    try {
        const data = await getUpcomingMatches()
        return {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            statusCode: 200,
            body: JSON.stringify({
                data
            })
        }
    } catch (e) {
        return {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            statusCode: 500,
            body: JSON.stringify({
                e
            })
        }
    }
}