'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('midia_compositor', {
      fields: ['id_midia'],
      type: 'foreign key',
      name: 'fk_midia_compositor_id_midia',
      references: {
        table: 'midia',
        field: 'id_midia',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }, {
      fields: ['id_compositor'],
      type: 'foreign key',
      name: 'fk_midia_compositor_id_compositor',
      references: {
        table: 'compositor',
        field: 'id_compositor',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }, {
      fields: ['id_artista'],
      type: 'foreign key',
      name: 'fk_midia_compositor_id_artista',
      references: {
        table: 'artista',
        field: 'id_artista',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('midia_compositor', 'fk_midia_compositor_id_midia');
    await queryInterface.removeConstraint('midia_compositor', 'fk_midia_compositor_id_compositor');
    await queryInterface.removeConstraint('midia_compositor', 'fk_midia_compositor_id_artista');
  }
};
