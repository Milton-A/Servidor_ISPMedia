// Importe os módulos necessários do Sequelize
import { DataTypes, Model, Optional } from "sequelize";
import connection from "../database/index";

interface GrupoAttributes {
  id_grupo?: number;
  nome?: string;
  estado?: string;
  tipo?: string;
}

class GrupoModel extends Model implements GrupoAttributes {
  id_grupo?: number;
  nome?: string;
  estado?: string;
  tipo?: string;
}

GrupoModel.init(
  {
    id_grupo: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "grupo",
    timestamps: true,
  }
);
export default GrupoModel;
