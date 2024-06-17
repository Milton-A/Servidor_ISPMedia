'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('notificacoes', {
      fields: ['id_perfil_usuario'],
      type: 'foreign key',
      name: 'fk_notificacoes_id_usuario',
      references: {
        table: 'perfil_usuario',
        field: 'id_perfil_usuario',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
      {
        fields: ['id_notificacao'],
        type: 'foreign key',
        name: 'fk_id_notificacao',
        references: {
          table: 'notificacoes',
          field: 'id_notificacao',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('notificacao_visualizacao');
  }
};
