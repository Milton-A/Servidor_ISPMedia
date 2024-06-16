'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adicionar a referência à tabela 'usuario' na coluna 'id_usuario'
    await queryInterface.addConstraint('perfil_usuario', {
      fields: ['id_usuario'],
      type: 'foreign key',
      name: 'fk_perfil_usuario_id_usuario',
      references: {
        table: 'usuario',
        field: 'id_usuario',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    // Remover a referência da coluna 'id_usuario'
    await queryInterface.removeConstraint('perfil_usuario', 'fk_perfil_usuario_id_usuario');
  }
};
