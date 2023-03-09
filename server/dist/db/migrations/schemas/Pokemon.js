"use strict";
// TODO: Update this, don't want any type
const pokemonSchema = (table) => {
    table.increments("id").primary().unique();
    table.string("street").notNullable().unique();
    table.string("suburb").notNullable();
    table.string("city").notNullable();
    table.string("code").notNullable();
    table.timestamps(true, true);
};
module.exports = pokemonSchema;
