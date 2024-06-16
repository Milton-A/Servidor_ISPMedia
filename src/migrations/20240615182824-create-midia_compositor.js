'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('midia_compositor', {
      id_midia_compositor: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      id_midia: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_compositor: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
      },
      id_artista: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('midia_compositor');
  }
};
