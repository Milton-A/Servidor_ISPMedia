import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface LegendaAttributes {
  id_legendas?: number;
  arquivo: string;
  estado: string;
}

class Legenda extends Model<LegendaAttributes> implements LegendaAttributes {
  public id_legendas!: number;
  public arquivo!: string;
  public estado!: string;
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
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "legendas",
    timestamps: true,
  }
);

export default Legenda;
