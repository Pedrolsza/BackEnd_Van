import { DataTypes } from "sequelize";

const Usuario = sequelize.define('Usuario', {

  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  senha: DataTypes.STRING,
  telefone: DataTypes.STRING,
  data_nasc: DataTypes.DATE
});

export default Usuario;