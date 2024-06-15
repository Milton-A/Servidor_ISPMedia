'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('concerto', {
      id_concerto: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      editora: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      titulo: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      duracao: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      arquivo: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      tamanho: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      id_genero_media: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        // references: {
        //   model: 'genero_media',
        //   key: 'id_genero_media',
        // },
      },
      id_tipo_media: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        // references: {
        //   model: 'tipo_media',
        //   key: 'id_tipo_media',
        // },
      },
      id_editora: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        // references: {
        //   model: 'editora',
        //   key: 'id_editora',
        // },
      },
      estado: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      imagem: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('concerto');
  }
};
