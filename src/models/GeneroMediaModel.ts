import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface GeneroMediaAttributes {
  id_genero_media?: number;
  nome: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class GeneroMedia
  extends Model<GeneroMediaAttributes>
  implements GeneroMediaAttributes
{
  public id_genero_media!: number;
  public nome!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: connection,
    tableName: "genero_media",
    timestamps: true,
    underscored: true,
  }
);

export default GeneroMedia;
