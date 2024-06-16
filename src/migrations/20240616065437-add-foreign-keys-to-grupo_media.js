'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Adicionar as chaves estrangeiras
    await queryInterface.addConstraint('grupo_media', {
      fields: ['id_grupo'],
      type: 'foreign key',
      name: 'fk_grupo_media_id_grupo',
      references: {
        table: 'grupo',
        field: 'id_grupo',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('grupo_media', {
      fields: ['id_media'],
      type: 'foreign key',
      name: 'fk_grupo_media_id_media',
      references: {
        table: 'midia',
        field: 'id_midia',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    // Remover as chaves estrangeiras
    await queryInterface.removeConstraint('grupo_media', 'fk_grupo_media_id_grupo');
    await queryInterface.removeConstraint('grupo_media', 'fk_grupo_media_id_media');
  }
};
