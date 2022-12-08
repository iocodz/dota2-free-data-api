const config = require("../config")
const filters = require("../helpers/filter");
const getUpcomingTournaments = require("../services/getUpcomingTournaments")

exports.handler = async function (event) {
  try {
    const { tournaments } = await getUpcomingTournaments();
    const data = filters(tournaments, event);
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