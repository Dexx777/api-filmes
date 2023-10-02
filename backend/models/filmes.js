'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Filmes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Filmes.init({
    idFilmes: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    idGenero: DataTypes.INTEGER,
    ano: DataTypes.INTEGER,
    duracao: DataTypes.TIME,
    imagem: DataTypes.STRING,
    trailer: DataTypes.STRING,
    idDoDiretor: DataTypes.INTEGER,
    idDoElenco: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Filmes',
  });
  return Filmes;
};