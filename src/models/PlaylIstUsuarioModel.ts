import { DataTypes, Model } from "sequelize";
import connection from "../database/index";
import UserProfile from "./UserProfile";
import Playlist from "./PlaylistModel";

class PlaylistUsuario extends Model {
  id_playlist_usuario?: number;
  id_perfil_usuario!: number;
  id_playlist!: number;
}

PlaylistUsuario.init(
  {
    id_playlist_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
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
    tableName: "playlist_usuario",
    timestamps: true,
  }
);
PlaylistUsuario.belongsTo(UserProfile, {
  foreignKey: "id_perfil_usuario",
  as: "perfil_usuario",
});
PlaylistUsuario.belongsTo(Playlist, {
  foreignKey: "id_playlist",
  as: "playlist",
});

export default PlaylistUsuario;
