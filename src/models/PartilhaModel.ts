import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface PartilhaAttributes {
  id_partilha?: number;
  id_midia: number;
  id_receptor_usuario: number;
  id_usuario: number;
  data: Date;
}

class Partilha extends Model implements PartilhaAttributes {
  public id_partilha!: number;
  public id_midia!: number;
  public id_receptor_usuario!: number;
  public id_usuario!: number;
  public data!: Date;
}

Partilha.init(
  {
    id_partilha: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_midia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    id_receptor_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    id_perfil_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: connection,
    tableName: "partilha",
    timestamps: true,
  }
);

export default Partilha;
