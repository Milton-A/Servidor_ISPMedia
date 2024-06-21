import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

class Notificacao extends Model {
  id_notificacao!: number;
  id_perfil_usuario!: number;
  mensagem!: string;
  data_envio!: Date;
  destino!: number;
  tipo!: string;
}

Notificacao.init(
  {
    id_notificacao: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_perfil_usuario: {
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
  }
);

export default Notificacao;
