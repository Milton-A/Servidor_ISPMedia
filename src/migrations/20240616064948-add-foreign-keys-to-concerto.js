'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        //     // Adicionar a referência à tabela 'genero_media' na coluna 'id_genero_media'
        //     await queryInterface.addConstraint('concerto', {
        //       fields: ['id_genero_media'],
        //       type: 'foreign key',
        //       name: 'fk_concerto_id_genero_media',
        //       references: {
        //         table: 'genero_media',
        //         field: 'id_genero_media',
        //       },
        //       onDelete: 'cascade',
        //       onUpdate: 'cascade',
        //     });

        //     // Adicionar a referência à tabela 'tipo_media' na coluna 'id_tipo_media'
        //     await queryInterface.addConstraint('concerto', {
        //       fields: ['id_tipo_media'],
        //       type: 'foreign key',
        //       name: 'fk_concerto_id_tipo_media',
        //       references: {
        //         table: 'tipo_media',
        //         field: 'id_tipo_media',
        //       },
        //       onDelete: 'cascade',
        //       onUpdate: 'cascade',
        //     });

        //     // Adicionar a referência à tabela 'editora' na coluna 'id_editora'
        //     await queryInterface.addConstraint('concerto', {
        //       fields: ['id_editora'],
        //       type: 'foreign key',
        //       name: 'fk_concerto_id_editora',
        //       references: {
        //         table: 'editora',
        //         field: 'id_editora',
        //       },
        //       onDelete: 'cascade',
        //       onUpdate: 'cascade',
        //     });
    },

    async down(queryInterface, Sequelize) {
        //     // Remover a referência da coluna 'id_genero_media'
        //     await queryInterface.removeConstraint('concerto', 'fk_concerto_id_genero_media');

        //     // Remover a referência da coluna 'id_tipo_media'
        //     await queryInterface.removeConstraint('concerto', 'fk_concerto_id_tipo_media');

        //     // Remover a referência da coluna 'id_editora'
        //     await queryInterface.removeConstraint('concerto', 'fk_concerto_id_editora');
    }
};