module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("livros", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade_paginas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ano_lancamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      estoque: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("livros");
  },
};
