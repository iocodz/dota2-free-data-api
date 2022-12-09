const config = require("../config");
const filters = require("../helpers/filter");
const getTeams = require("../services/getTeams")

exports.handler = async function (event) {
  try {
    const { teams } = await getTeams();
    const data = filters(teams, event);
    return {
      statusCode: 200,
      headers: config.headers,
      body: JSON.stringify({
        data,
        count: data.length
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