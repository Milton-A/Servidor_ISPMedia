// Importe os módulos necessários do Sequelize
import { DataTypes, Model, Optional } from "sequelize";
import connection from "../database/index";

interface GrupoMediaAttributes {
  id_grupo_media?: number;
  id_grupo?: number;
  id_media?: number;
}

class GrupoMediaModel extends Model implements GrupoMediaAttributes {
  id_grupo_media?: number;
  id_grupo?: number;
  id_media?: number;
}

GrupoMediaModel.init(
  {
    id_grupo_media: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_grupo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "grupo",
        key: "id_grupo",
      },
    },
    id_media: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "grupo_media",
    timestamps: true,
  }
);

export default GrupoMediaModel;
