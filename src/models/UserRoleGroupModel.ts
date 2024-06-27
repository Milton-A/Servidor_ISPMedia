import { DataTypes, Model, Optional } from "sequelize";
import connection from "../database/index";

interface PapelUsuarioGrupoAttributes {
  id_papel_usuario_grupo: number;
  nome: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PapelUsuarioGrupoCreationAttributes
  extends Optional<PapelUsuarioGrupoAttributes, "id_papel_usuario_grupo"> {}

class PapelUsuarioGrupo
  extends Model<
    PapelUsuarioGrupoAttributes,
    PapelUsuarioGrupoCreationAttributes
  >
  implements PapelUsuarioGrupoAttributes
{
  public id_papel_usuario_grupo!: number;
  public nome!: string;
}

PapelUsuarioGrupo.init(
  {
    id_papel_usuario_grupo: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "papel_usuario_grupo",
    timestamps: true,
  }
);

export default PapelUsuarioGrupo;
