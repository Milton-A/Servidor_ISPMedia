'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notificacoes', {
      id_notificacao: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      id_perfil_usuario: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      mensagem: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      data_envio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      destino: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('notificacoes');
  }
};
