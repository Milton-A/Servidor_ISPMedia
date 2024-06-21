import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

class PlaylistMedia extends Model {
  id_playlist_media!: number;
  id_midia!: number;
  id_perfil_usuario!: number;
  id_playlist!: number;
}

PlaylistMedia.init(
  {
    id_playlist_media: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_midia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    id_perfil_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    id_playlist: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "playlist_media",
    timestamps: true,
  }
);

export default PlaylistMedia;
