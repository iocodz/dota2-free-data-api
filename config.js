var config = {};

config.baseUrl = 'https://liquipedia.net/dota2';
config.upcomingMatchesUrl = config.baseUrl + '/Liquipedia:Upcoming_and_ongoing_matches';
config.upcomingTournamentsUrl = config.baseUrl + '/Portal:Tournaments';
config.teamsUrl = config.baseUrl + '/Portal:Teams';
config.teamUrl = config.baseUrl;

config.headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
}

module.exports = config;