'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('playlist_media', {
      id_midia: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'midia',
          key: 'id_midia',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_perfil_usuario: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'perfil_usuario',
          key: 'id_perfil_usuario',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_playlist: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'playlist',
          key: 'id_playlist',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('playlist_media');
  }
};
