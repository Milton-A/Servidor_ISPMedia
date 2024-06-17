'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('criticas', {
      id_critica: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      id_perfil_usuario: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_midia: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('criticas');
  }
};
