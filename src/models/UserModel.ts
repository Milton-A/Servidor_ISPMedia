import { DataTypes, Model, Optional } from "sequelize";
import connection from "../database/index";

export interface UserAttributes {
  id_usuario?: number;
  nome?: string;
  sobrenome?: string;
  email?: string;
}

class UserModel extends Model implements UserAttributes {
  id_usuario?: number;
  nome?: string;
  sobrenome?: string;
  email?: string;
}

UserModel.init(
  {
    id_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    sobrenome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: connection,
    tableName: "usuario",
    timestamps: true,
  }
);

export default UserModel;
