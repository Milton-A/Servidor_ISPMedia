import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

class NotificacaoVisualizacaoModel extends Model {
  id_notificacao_visualizacao!: number;
  id_usuario!: number;
  data_visualizacao!: Date;
  id_notificacao!: number;
}

// Inicialização do modelo
NotificacaoVisualizacaoModel.init(
  {
    id_notificacao_visualizacao: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    data_visualizacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    id_notificacao: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "notificacao_visualizacao",
    timestamps: true,
    underscored: true, // opcional: define que os nomes das colunas no banco de dados serão com snake_case
  }
);

// Exportação do modelo
export default NotificacaoVisualizacaoModel;
