// Importe os módulos necessários do Sequelize
import { DataTypes, Model, Optional } from "sequelize";
import connection from "../database/index";

interface GrupoAttributes {
  id_grupo: number;
  nome: string;
  estado: string;
  proprietario: string;
  tipo: string;
}

interface GrupoCreationAttributes
  extends Optional<GrupoAttributes, "id_grupo"> {}

class GrupoModel
  extends Model<GrupoAttributes, GrupoCreationAttributes>
  implements GrupoAttributes
{
  public id_grupo!: number;
  public nome!: string;
  public estado!: string;
  public proprietario!: string;
  public tipo!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

GrupoModel.init(
  {
    id_grupo: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    proprietario: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "grupo",
    timestamps: true,
  }
);
export default GrupoModel;
