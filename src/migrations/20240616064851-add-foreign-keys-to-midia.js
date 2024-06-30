'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('midia', {
      fields: ['id_perfil_usuario'],
      type: 'foreign key',
      name: 'fk_id_perfil_usuario',
      references: {
        table: 'perfil_usuario',
        field: 'id_perfil_usuario',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('midia', {
      fields: ['id_legenda'],
      type: 'foreign key',
      name: 'fk_legendas_id_legenda',
      references: {
        table: 'legendas',
        field: 'id_legendas',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('midia', {
      fields: ['id_genero_media'],
      type: 'foreign key',
      name: 'fk_genero_media_id_genero_media',
      references: {
        table: 'genero_media',
        field: 'id_genero_media',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('midia', {
      fields: ['id_tipo_media'],
      type: 'foreign key',
      name: 'fk_id_tipo_media',
      references: {
        table: 'tipo_media',
        field: 'id_tipo_media',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
  }
};
