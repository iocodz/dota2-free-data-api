const config = require("../config");
const getTeam = require("../services/getTeam");
const getTeams = require("../services/getTeams")

exports.handler = async event => {
  const { id } = event.queryStringParameters;
  try {
    const data = id ? await getTeam(id) : await getTeams()
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