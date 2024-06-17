'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adicionar a referência à tabela 'midia' na coluna 'id_midia'
    await queryInterface.addConstraint('partilha', {
      fields: ['id_midia'],
      type: 'foreign key',
      name: 'fk_partilha_id_midia',
      references: {
        table: 'midia',
        field: 'id_midia',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
      {
        fields: ['id_perfil_usuario'],
        type: 'foreign key',
        name: 'fk_partilhaUsuarioOwner_id_perfil_usuario',
        references: {
          table: 'perfil_usuario',
          field: 'id_perfil_usuario',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });

    // Adicionar a referência à tabela 'usuario' na coluna 'id_receptor_usuario'
    await queryInterface.addConstraint('partilha', {
      fields: ['id_receptor_usuario'],
      type: 'foreign key',
      name: 'fk_partilha_id_receptor_usuario',
      references: {
        table: 'perfil_usuario',
        field: 'id_perfil_usuario',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    // Remover a referência da coluna 'id_midia'
    await queryInterface.removeConstraint('partilha', 'fk_partilha_id_midia');

    // Remover a referência da coluna 'id_receptor_usuario'
    await queryInterface.removeConstraint('partilha', 'fk_partilha_id_receptor_usuario');
    await queryInterface.removeConstraint('partilha', 'fk_partilhaUsuarioOwner_id_perfil_usuario');
  }
};
