'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('playlist_usuario', {
      id_playlist_usuario: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      id_perfil_usuario: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_playlist: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
    await queryInterface.addConstraint('playlist_usuario',
      {
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
    await queryInterface.addConstraint('playlist_usuario', {
      fields: ['id_playlist'],
      type: 'foreign key',
      name: 'fk_pla_id_playlist',
      references: {
        table: 'playlist',
        field: 'id_playlist',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('playlist_usuario');
  }
};
