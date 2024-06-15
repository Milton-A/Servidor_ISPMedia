'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('editora', {
      id_editora: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      autores: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      formato_media: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      id_autor: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        // references: {
        //   model: 'autor',
        //   key: 'id_autor',
        // },
      },
      id_musico: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        // references: {
        //   model: 'musico',
        //   key: 'id_musico',
        // },
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
    await queryInterface.dropTable('editora');
  }
};
