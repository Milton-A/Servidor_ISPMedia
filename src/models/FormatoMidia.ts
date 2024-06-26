import { DataTypes, Model } from "sequelize";
import connection from "../database/index";

interface FormatoMidiaAtrinuttes {
  id_formato_media?: number;
  nome: string;
}

class FormatoMedia extends Model implements FormatoMidiaAtrinuttes {
  id_formato_media!: number;
  nome!: string;
}

FormatoMedia.init(
  {
    id_formato_media: {
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
    tableName: "formato_media",
    timestamps: true,
  }
);

export default FormatoMedia;
