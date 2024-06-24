'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('playlist_media', {
      fields: ['id_midia'],
      type: 'foreign key',
      name: 'fk_playlist_media_id_midia',
      references: {
        table: 'midia',
        field: 'id_midia',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('playlist_media', {
      fields: ['id_perfil_usuario'],
      type: 'foreign key',
      name: 'fk_playlist_media_id_perfil_usuario',
      references: {
        table: 'perfil_usuario',
        field: 'id_perfil_usuario',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('playlist_media', {
      fields: ['id_playlist'],
      type: 'foreign key',
      name: 'fk_playlist_media_id_playlist',
      references: {
        table: 'playlist',
        field: 'id_playlist',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('playlist_media');
  }
};
