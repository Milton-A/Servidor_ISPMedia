import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface MidiaCompositorAttributes {
  id_midia_compositor?: number;
  id_midia: number;
  id_compositor?: number;
  id_artista?: number;
}

class MidiaCompositor extends Model implements MidiaCompositorAttributes {
  public id_midia_compositor!: number;
  public id_midia!: number;
  public id_compositor?: number;
  public id_artista?: number;
}

MidiaCompositor.init(
  {
    id_midia_compositor: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_midia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    id_compositor: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    id_artista: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    tableName: "midia_compositor",
    timestamps: true,
  }
);

export default MidiaCompositor;
