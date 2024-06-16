// Importações do Sequelize e da conexão
import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

// Definição do modelo
class PlaylistMedia extends Model {
  // Campos da tabela
  id_playlist_media!: number;
  id_midia!: number;
  id_perfil_usuario!: number;
  id_playlist!: number;
}

// Inicialização do modelo
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
    underscored: true, // opcional: define que os nomes das colunas no banco de dados serão com snake_case
  }
);

// Exportação do modelo
export default PlaylistMedia;
