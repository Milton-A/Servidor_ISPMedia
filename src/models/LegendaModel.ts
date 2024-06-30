import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface LegendaAttributes {
  id_legendas?: number;
  arquivo: string;
  estado: boolean;
}

class Legenda extends Model<LegendaAttributes> implements LegendaAttributes {
  public id_legendas!: number;
  public arquivo!: string;
  public estado!: boolean;
}

Legenda.init(
  {
    id_legendas: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    arquivo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: connection,
    tableName: "legendas",
    timestamps: true,
  }
);

export default Legenda;
