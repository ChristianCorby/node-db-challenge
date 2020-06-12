exports.seed = function (knex) {
    return knex('project').del()
      .then(function () {
        return knex('project').insert([
          { id: 1, project_name: 'rowValue1', project_desc: 'rowValue1', completed: 0 }
        ]);
      });
  };