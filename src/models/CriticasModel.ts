import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface CriticaAttributes {
  id_critica?: number;
  descricao?: string;
  id_perfil_usuario?: number;
  id_midia?: number;
}

class Critica extends Model implements CriticaAttributes {
  id_critica?: number;
  descricao?: string;
  id_perfil_usuario?: number;
  id_midia?: number;
}

Critica.init(
  {
    id_critica: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    id_perfil_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    id_midia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "criticas",
    timestamps: true,
  }
);

export default Critica;
