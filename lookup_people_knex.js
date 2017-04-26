const settings = require("./settings");
const knex = require("knex")({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});
const moment = require('moment');
const args = process.argv.slice(2);
knex.select().from("famous_people").where({ last_name: args[0] }).asCallback((err, results) => {
  if (err) {
    return console.error("error running query", err);
  }
  return friendlyFormat(results[0]);
});

function friendlyFormat(resultObj) {
  var prettyBDay = resultObj.birthdate;
  console.log(`Searching ...\nFound 1 person(s) by the name '${args}':\n - ${resultObj.id}: ${resultObj.first_name} ${resultObj.last_name}, born '${moment(prettyBDay).format('MMM Do YYYY')}'`);

}
