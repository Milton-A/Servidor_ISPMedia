import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface EditoraAttributes {
  id_editora?: number;
  nome?: string;
}

class Editora extends Model implements EditoraAttributes {
  id_editora?: number;
  nome?: string;
}

Editora.init(
  {
    id_editora: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "editora",
    timestamps: true,
  }
);

export default Editora;
