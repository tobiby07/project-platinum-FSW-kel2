/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('product', function(table){
      table.increments('id').primary();
      table.string('kodeProduct').unique().notNullable();
      table.string('categoryProduct').notNullable();
      table.string('namaProduct').notNullable();
      table.decimal('hargaProduct').notNullable()
      table.string('picture1')
      table.string('picture2')
      table.string('picture3')
      table.string('picture4')
      table.string('desctription')
      table.timestamp('created_at').defaultTo(knex.fn.now());

    })};
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.dropTable('product')
  };
  