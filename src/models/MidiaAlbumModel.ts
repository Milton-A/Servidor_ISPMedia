import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface MidiaAlbumAttributes {
  id_midia_album?: number;
  id_midia: number;
  id_album: number;
}

class MidiaAlbum
  extends Model<MidiaAlbumAttributes>
  implements MidiaAlbumAttributes
{
  public id_midia_album!: number;
  public id_midia!: number;
  public id_album!: number;
}

MidiaAlbum.init(
  {
    id_midia_album: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_midia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    id_album: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "midia_album",
    timestamps: true,
  }
);

export default MidiaAlbum;
