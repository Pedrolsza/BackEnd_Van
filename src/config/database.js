import { Sequelize } from "sequelize";

const sequelize = new Sequelize('mysql://usuario:senha123@localhost:3306/van_escolar');

export { sequelize };
