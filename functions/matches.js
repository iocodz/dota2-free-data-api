const config = require("../config")
const filters = require("../helpers/filter");
const getUpcomingMatches = require("../services/getUpcomingMatches")

exports.handler = async function (event) {
  try {
    const matches = await getUpcomingMatches();
    const data = filters(matches, event);
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