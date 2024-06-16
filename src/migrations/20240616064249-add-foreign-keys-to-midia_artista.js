'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('midia_artista', {
      fields: ['id_midia'],
      type: 'foreign key',
      name: 'fk_midia_artista_id_midia',
      references: {
        table: 'midia',
        field: 'id_midia',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('midia_artista', {
      fields: ['id_artista'],
      type: 'foreign key',
      name: 'fk_midia_artista_id_artista',
      references: {
        table: 'artista',
        field: 'id_artista',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('midia_artista', 'fk_midia_artista_id_midia');
    await queryInterface.removeConstraint('midia_artista', 'fk_midia_artista_id_artista');
  }
};
