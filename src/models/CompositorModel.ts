import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface CompositorAttributes {
  id_compositor?: number;
  nome?: string;
}

class Compositor extends Model implements CompositorAttributes {
  id_compositor?: number;
  nome?: string;
}

Compositor.init(
  {
    id_compositor: {
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
    tableName: "compositores",
    timestamps: true,
  }
);

export default Compositor;
