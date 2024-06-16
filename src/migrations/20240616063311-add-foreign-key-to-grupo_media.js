'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('grupo_media', {
      fields: ['id_media'],
      type: 'foreign key',
      name: 'fk_grupoUsuario_media_id_media',
      references: {
        table: 'midia',
        field: 'id_midia',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
      {
        fields: ['id_grupo'],
        type: 'foreign key',
        name: 'fk_grupoUsuario_grupo_id_grupo',
        references: {
          table: 'grupo',
          field: 'id_grupo',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('grupo_media', 'fk_grupoUsuario_media_id_media');
    await queryInterface.removeConstraint('grupo_media', 'fk_grupoUsuario_grupo_id_grupo');
  }
};
