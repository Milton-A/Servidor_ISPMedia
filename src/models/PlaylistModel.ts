import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

class Playlist extends Model {
  id_playlist!: number;
  nome!: string;
  data!: Date;
  visibilidade!: string;
  estado!: boolean;
}

Playlist.init(
  {
    id_playlist: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    visibilidade: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "playlist",
    timestamps: true,
  }
);

export default Playlist;
