import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface ArtistaAttributes {
  id_artista?: number;
  nome?: string;
  biografia?: string | null;
  imagem?: string | null;
  id_editora?: number;
}

class Artista extends Model implements ArtistaAttributes {
  id_artista?: number;
  nome?: string;
  biografia?: string | null;
  imagem?: string | null;
  id_editora?: number;
}

Artista.init(
  {
    id_artista: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    biografia: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imagem: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    id_editora: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "artista",
    timestamps: true,
  }
);

export default Artista;
