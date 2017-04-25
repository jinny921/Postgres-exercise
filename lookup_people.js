const pg = require("pg");
const db = require('./db');
const moment = require('moment');

const args = process.argv.slice(2);

function searchPerson(done) {
  db.connect((error, client) => {
    client.query(`SELECT * FROM famous_people WHERE last_name = '${args}'`, (err, result) => {
      done(friendlyFormat(result.rows[0]));
      db.close();
    });
  });
}

function friendlyFormat(resultObj) {
  var prettyBDay = resultObj.birthdate;
  return `Searching ...\nFound 1 person(s) by the name '${args}':\n - ${resultObj.id}: ${resultObj.first_name} ${resultObj.last_name}, born '${moment(prettyBDay).format('MMM Do YYYY')}'`;

}

searchPerson((resultString) => {
  console.log(resultString);
});



// - 1: Abraham Lincoln, born '1809-02-12'