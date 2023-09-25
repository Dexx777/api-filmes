'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diretor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Diretor.init({
    nome: DataTypes.STRING,
    biografia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Diretor',
  });
  return Diretor;
};