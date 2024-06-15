// Importe os módulos necessários do Sequelize
import { DataTypes, Model, Optional } from "sequelize";
import connection from "../database/index";

interface GrupoMediaAttributes {
  id_grupo_media: number;
  id_grupo: number;
  id_media: number;
}

interface GrupoMediaCreationAttributes
  extends Optional<GrupoMediaAttributes, "id_grupo_media"> {}

class GrupoMediaModel
  extends Model<GrupoMediaAttributes, GrupoMediaCreationAttributes>
  implements GrupoMediaAttributes
{
  public id_grupo_media!: number;
  public id_grupo!: number;
  public id_media!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

GrupoMediaModel.init(
  {
    id_grupo_media: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_grupo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "grupo",
        key: "id_grupo",
      },
    },
    id_media: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      // Adicionar referência se necessário
    },
  },
  {
    sequelize: connection,
    tableName: "grupo_media",
    timestamps: true,
  }
);

export default GrupoMediaModel;
