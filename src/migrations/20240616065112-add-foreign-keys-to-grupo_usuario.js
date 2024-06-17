'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adicionar a referência à tabela 'grupo' na coluna 'id_grupo'
    await queryInterface.addConstraint('grupo_usuario', {
      fields: ['id_grupo'],
      type: 'foreign key',
      name: 'fk_grupo_usuario_id_grupo',
      references: {
        table: 'grupo',
        field: 'id_grupo',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    // Adicionar a referência à tabela 'usuario' na coluna 'id_usuario'
    await queryInterface.addConstraint('grupo_usuario', {
      fields: ['id_perfil_usuario'],
      type: 'foreign key',
      name: 'fk_grupo_usuario_id_usuario',
      references: {
        table: 'perfil_usuario',
        field: 'id_perfil_usuario',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    // Adicionar a referência à tabela 'papel_usuario_grupo' na coluna 'id_papel_usuario_grupo'
    await queryInterface.addConstraint('grupo_usuario', {
      fields: ['id_papel_usuario_grupo'],
      type: 'foreign key',
      name: 'fk_grupo_usuario_id_papel_usuario_grupo',
      references: {
        table: 'papel_usuario_grupo',
        field: 'id_papel_usuario_grupo',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    // Remover a referência da coluna 'id_grupo'
    await queryInterface.removeConstraint('grupo_usuario', 'fk_grupo_usuario_id_grupo');

    // Remover a referência da coluna 'id_usuario'
    await queryInterface.removeConstraint('grupo_usuario', 'fk_grupo_usuario_id_usuario');

    // Remover a referência da coluna 'id_papel_usuario_grupo'
    await queryInterface.removeConstraint('grupo_usuario', 'fk_grupo_usuario_id_papel_usuario_grupo');
  }
};
