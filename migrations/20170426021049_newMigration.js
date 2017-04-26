exports.up = function(knex) {
  return knex.schema.table("milestones", (table) => {
    table.bigInteger('famous_person_id').unsigned().index().references('id').inTable('famous_people');
  });
};
exports.down = function(knex) {
  return knex.schema.table("milestones", (table) => {
    table.increments();
    table.string("description");
    table.date("date_achieved");
  });
}
