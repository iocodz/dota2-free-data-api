const config = require("../config")
const getHeroes = require("../services/getHeroes")

exports.handler = async function () {
  try {
    const data = await getHeroes()
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