const config = require("../config")
const getTeams = require("../services/getTeams")

exports.handler = async function () {
  try {
    const data = await getTeams()
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