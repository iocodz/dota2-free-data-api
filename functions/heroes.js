const config = require("../config");
const filters = require("../helpers/filter");
const getHeroes = require("../services/getHeroes")

exports.handler = async function (event) {
  try {
    const { heroes } = await getHeroes();
    const data = filters(heroes, event);
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