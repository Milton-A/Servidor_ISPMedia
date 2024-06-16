'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('playlist_media', {
      id_playlist_media: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      id_midia: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_perfil_usuario: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_playlist: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('playlist_media');
  }
};
