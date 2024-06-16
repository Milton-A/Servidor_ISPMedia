import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface MidiaArtistaAttributes {
  id_midia_artista?: number;
  id_midia: number;
  id_artista: number;
}

class MidiaArtista
  extends Model<MidiaArtistaAttributes>
  implements MidiaArtistaAttributes
{
  public id_midia_artista!: number;
  public id_midia!: number;
  public id_artista!: number;
}

MidiaArtista.init(
  {
    id_midia_artista: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_midia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    id_artista: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "midia_artista",
    timestamps: true,
  }
);

export default MidiaArtista;
