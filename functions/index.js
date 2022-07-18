const getUpcomingMatches = require("../utils/getUpcomingMatches")

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
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