const config = require("../config")
const getItems = require("../services/getItems")

exports.handler = async function () {
  try {
    const data = await getItems()
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