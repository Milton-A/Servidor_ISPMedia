'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adicionar a referência à tabela 'usuario' na coluna 'id_usuario'
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
    });
  },

  async down(queryInterface, Sequelize) {
    // Remover a referência da coluna 'id_usuario'
    await queryInterface.removeConstraint('notificacoes', 'fk_notificacoes_id_usuario');
  }
};
