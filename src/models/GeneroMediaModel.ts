import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface GeneroMediaAttributes {
  id_genero_media?: number;
  nome: string;
}

class GeneroMedia extends Model implements GeneroMediaAttributes {
  id_genero_media!: number;
  nome!: string;
}

GeneroMedia.init(
  {
    id_genero_media: {
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
    tableName: "genero_media",
    timestamps: true,
  }
);

export default GeneroMedia;
