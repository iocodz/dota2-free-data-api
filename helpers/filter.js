module.exports = function filters (data, event) {
  const filters = event.queryStringParameters;
  if(!filters) return data;

  const filteredData = data.filter(item => {
    let isValid = true;
    for (key in filters) {
      let value = item[key];
      if(key.indexOf(".") != -1) {
        const obj = key.split(".");
        value = item[obj[0]][obj[1]];
      }
      isValid = isValid && value == filters[key];
    }
    return isValid;
  });

  return filteredData;
}
