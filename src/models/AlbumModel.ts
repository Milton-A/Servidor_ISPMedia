import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface AlbumAttributes {
  id_album?: number;
  titulo?: string;
  data_lancamento?: Date;
  capa?: string;
}

class Album extends Model implements AlbumAttributes {
  id_album?: number;
  titulo?: string;
  data_lancamento?: Date;
  genero?: string;
  capa?: string;
}

Album.init(
  {
    id_album: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    data_lancamento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    capa: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "album",
    timestamps: true,
  }
);

export default Album;
