const config = require("../config")
const getActiveTeams = require("../services/getActiveTeams")

exports.handler = async function () {
    try {
        const data = await getActiveTeams()
        return {
            statusCode: 200,
            headers: config.headers,
            body: JSON.stringify({
                data
            })
        }
    } catch (e) {
        console.log(e)
        return {
            statusCode: 500,
            headers: config.headers,
            body: JSON.stringify({
                e
            })
        }
    }
}