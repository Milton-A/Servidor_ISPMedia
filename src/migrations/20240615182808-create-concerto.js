'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        //     await queryInterface.createTable('concerto', {
        //       id_concerto: {
        //         type: Sequelize.INTEGER.UNSIGNED,
        //         autoIncrement: true,
        //         primaryKey: true,
        //       },
        //       nome: {
        //         type: Sequelize.STRING(100),
        //         allowNull: false,
        //       },
        //       createdAt: {
        //         type: Sequelize.DATE,
        //         allowNull: false,
        //         defaultValue: Sequelize.NOW,
        //       },
        //       updatedAt: {
        //         type: Sequelize.DATE,
        //         allowNull: false,
        //         defaultValue: Sequelize.NOW,
        //       },
        // });
    },

    async down(queryInterface, Sequelize) {
    }
};
