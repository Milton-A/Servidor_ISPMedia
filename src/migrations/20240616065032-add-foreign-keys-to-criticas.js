'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adicionar a referência à tabela 'usuario' na coluna 'id_usuario'
    await queryInterface.addConstraint('criticas', {
      fields: ['id_perfil_usuario'],
      type: 'foreign key',
      name: 'fk_criticas_id_perfil_usuario',
      references: {
        table: 'perfil_usuario',
        field: 'id_perfil_usuario',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    // Adicionar a referência à tabela 'midia' na coluna 'id_midia'
    await queryInterface.addConstraint('criticas', {
      fields: ['id_midia'],
      type: 'foreign key',
      name: 'fk_criticas_id_midia',
      references: {
        table: 'midia',
        field: 'id_midia',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    // Remover a referência da coluna 'id_usuario'
    await queryInterface.removeConstraint('criticas', 'fk_criticas_id_perfil_usuario');

    // Remover a referência da coluna 'id_midia'
    await queryInterface.removeConstraint('criticas', 'fk_criticas_id_midia');
  }
};
