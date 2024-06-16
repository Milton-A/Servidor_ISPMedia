'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('artista', {
      id_artista: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      biografia: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      imagem: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      id_editora: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('artista');
  }
};
