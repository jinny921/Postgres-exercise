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

knex.insert({
  first_name: args[0],
  last_name: args[1],
  birthdate: args[2] })
.into("famous_people")
.then((result) => {
  console.log(result);
  console.log('Successfully added another person!');
  knex.destroy();
});

