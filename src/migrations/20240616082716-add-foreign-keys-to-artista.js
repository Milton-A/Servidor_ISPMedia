'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('artista', {
      fields: ['id_editora'],
      type: 'foreign key',
      name: 'fk_editora_id_editora',
      references: {
        table: 'editora',
        field: 'id_editora',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('artista', 'fk_editora_id_editora');
  }
};
