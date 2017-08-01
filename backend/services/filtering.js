function parseQueryParameters(queryParameters){
  var queryRegexPattern = /(.*)(==)(.*)/;
  var finalQuery = {};
  queryParameters.forEach(query => {
    if (queryRegexPattern.test(query)){
      var queryParsed = queryRegexPattern.exec(query);
      var field = queryParsed[1];
      var op = queryParsed[2];
      var value = queryParsed[3] || '';
      finalQuery[field] = value;
    }
  })
  return finalQuery;
}

module.exports.parseQueryParameters = parseQueryParameters;
