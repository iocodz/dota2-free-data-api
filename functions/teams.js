const config = require("../config");
const filters = require("../helpers/filter");
const getTeam = require("../services/getTeam");
const getTeams = require("../services/getTeams")

exports.handler = async function (event) {
  try {
    const { id } = event.queryStringParameters;

    const { teams } = id ? await getTeam(id) : await getTeams();
    
    const data = id ? teams : filters(teams, event);

    return {
      statusCode: 200,
      headers: config.headers,
      body: JSON.stringify({
        data,
        count: data.length
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