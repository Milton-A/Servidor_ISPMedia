'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notificacao_visualizacao', {
      id_usuario: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id_usuario',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_notificacao: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'notificacoes',
          key: 'id_notificacao',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('notificacao_visualizacao');
  }
};
