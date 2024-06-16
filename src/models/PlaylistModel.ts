// Importações do Sequelize e da conexão
import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

// Definição do modelo
class Playlist extends Model {
  // Campos da tabela
  id_playlist!: number;
  nome!: string;
  data!: Date;
  visibilidade!: string;
  estado!: boolean;
}

// Inicialização do modelo
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
    underscored: true, // opcional: define que os nomes das colunas no banco de dados serão com snake_case
  }
);

// Exportação do modelo
export default Playlist;
