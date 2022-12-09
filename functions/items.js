const config = require("../config")
const filters = require("../helpers/filter");
const getItems = require("../services/getItems")

exports.handler = async function (event) {
  try {
    const { items } = await getItems();
    const data = filters(items, event);
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