'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Filmes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idFilmes: {
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      idGenero: {
        type: Sequelize.INTEGER
      },
      ano: {
        type: Sequelize.INTEGER
      },
      duracao: {
        type: Sequelize.TIME
      },
      imagem: {
        type: Sequelize.STRING
      },
      trailer: {
        type: Sequelize.STRING
      },
      idDoDiretor: {
        type: Sequelize.INTEGER
      },
      idDoElenco: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Filmes');
  }
};