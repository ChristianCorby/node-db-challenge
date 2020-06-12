exports.seed = function (knex) {
    return knex('resource').del()
      .then(function () {
        return knex('resource').insert([
          { id: 1, resource_name: 'rowValue1', resource_desc: 'rowValue1' }
        ]);
      });
  };