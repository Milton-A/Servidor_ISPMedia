'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('genero_media', [{
      nome: 'Pop',
    },
    {
      nome: 'Rock',
    }, {
      nome: 'R&B',
    },
    {
      nome: 'Jazz',
    },
    {
      nome: 'HipHop',
    }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
