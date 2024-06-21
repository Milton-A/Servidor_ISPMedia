import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface TipoMediaAttributes {
  id_tipo_media?: number;
  nome: string;
}

class TipoMedia extends Model implements TipoMediaAttributes {
  public id_tipo_media!: number;
  public nome!: string;
}

TipoMedia.init(
  {
    id_tipo_media: {
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
    tableName: "tipo_media",
    timestamps: true,
  }
);

export default TipoMedia;
