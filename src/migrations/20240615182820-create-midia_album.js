'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('midia_album', {
      id_midia_album: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      id_midia: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_album: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('midia_album');
  }
};
