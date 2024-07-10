import { DataTypes, Model } from "sequelize";
import connection from "../database/index";
import Midia from "./MidiaModel";
import Playlist from "./PlaylistModel";

class PlaylistMedia extends Model {
  id_playlist_media!: number;
  id_midia!: number;
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
PlaylistMedia.belongsTo(Midia, {
  foreignKey: "id_midia",
  as: "midia",
});
PlaylistMedia.belongsTo(Playlist, {
  foreignKey: "id_playlist",
  as: "playlist",
});

export default PlaylistMedia;
