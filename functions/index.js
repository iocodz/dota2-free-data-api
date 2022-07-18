const getUpcomingMatches = require("../utils/getUpcomingMatches")

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
}

exports.handler = async function () {
    try {
        const data = await getUpcomingMatches()
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                data
            })
        }
    } catch (e) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                e
            })
        }
    }
}