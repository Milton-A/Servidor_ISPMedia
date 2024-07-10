'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('midia', {
      id_midia: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      id_legenda: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_genero_media: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_tipo_media: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      duracao: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      arquivo: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      visibilidade: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      imagem: {
        type: Sequelize.BLOB("long"),
        allowNull: false,
      },
      formato_media: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      tamanho: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      data: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      id_perfil_usuario: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('midia');
  }
};
