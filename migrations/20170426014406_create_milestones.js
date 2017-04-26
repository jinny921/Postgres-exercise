

exports.up = function(knex) {
  return knex.schema.createTable("milestones", (table) => {
    table.increments();
    table.string("description");
    table.date("date_achieved");
    table.bigInteger('famous_person_id').unsigned().index().references('id').inTable('famous_people');
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable("milestones");
}
