// Importações do Sequelize e da conexão
import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

// Definição do modelo
class Notificacao extends Model {
  // Campos da tabela
  id_notificacao!: number;
  id_usuario!: number;
  mensagem!: string;
  data_envio!: Date;
  destino!: number;
  tipo!: string;
}

// Inicialização do modelo
Notificacao.init(
  {
    id_notificacao: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    mensagem: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    data_envio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    destino: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "notificacoes",
    timestamps: true,
    underscored: true, // opcional: define que os nomes das colunas no banco de dados serão com snake_case
  }
);

// Exportação do modelo
export default Notificacao;
