'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('midia_album', {
      fields: ['id_midia'],
      type: 'foreign key',
      name: 'fk_midia_album_id_midia',
      references: {
        table: 'midia',
        field: 'id_midia',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('midia_album', {
      fields: ['id_album'],
      type: 'foreign key',
      name: 'fk_midia_album_id_album',
      references: {
        table: 'album',
        field: 'id_album',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('midia_album', 'fk_midia_album_id_midia');
    await queryInterface.removeConstraint('midia_album', 'fk_midia_album_id_album');
  }
};
