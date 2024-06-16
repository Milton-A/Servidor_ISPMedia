'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('grupo_media', {
      id_grupo_media: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      id_grupo: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_media: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('grupo_media');
  }
};
