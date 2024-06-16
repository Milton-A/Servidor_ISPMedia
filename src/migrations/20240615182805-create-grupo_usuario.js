'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('grupo_usuario', {
      id_grupo_usuario: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      id_grupo: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_usuario: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_papel_usuario_grupo: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      data_entrada: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('grupo_usuario');
  }
};
