// Importe os módulos necessários do Sequelize
import { DataTypes, Model, Optional } from "sequelize";
import connection from "../database/index";

interface PlaylistAttributes {
  id_playlist: number;
  id_midia: number;
  id_perfil_usuario: number;
  nome: string;
  data: Date;
  visibilidade: string;
}

interface PlaylistCreationAttributes
  extends Optional<PlaylistAttributes, "id_playlist" | "data"> {}

class PlaylistModel
  extends Model<PlaylistAttributes, PlaylistCreationAttributes>
  implements PlaylistAttributes
{
  public id_playlist!: number;
  public id_midia!: number;
  public id_perfil_usuario!: number;
  public nome!: string;
  public data!: Date;
  public visibilidade!: string;
}

PlaylistModel.init(
  {
    id_playlist: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_midia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      // Adicionar referência se necessário
    },
    id_perfil_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      // Adicionar referência se necessário
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
  },
  {
    sequelize: connection,
    tableName: "playlist",
    timestamps: true,
  }
);

export default PlaylistModel;
