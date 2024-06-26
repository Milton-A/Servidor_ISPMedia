import { DataTypes, Model } from "sequelize";
import connection from "../database/index";
import FormatoMedia from "./FormatoMidia";
import UserProfile from "./UserProfile";
import Legenda from "./LegendaModel";
import GeneroMedia from "./GeneroMediaModel";
import TipoMedia from "./TipoMediaModel";

interface MidiaAttributes {
  id_midia?: number;
  titulo: string;
  id_legenda: number;
  id_genero_media: number;
  id_tipo_media: number;
  duracao: string;
  arquivo: string;
  id_formato_media: number;
  tamanho: string;
  data: string;
  id_perfil_usuario?: number | null;
  estado: boolean;
  imagem: string;
}

class Midia extends Model<MidiaAttributes> implements MidiaAttributes {
  public imagem!: string;
  public id_midia!: number;
  public titulo!: string;
  public id_legenda!: number;
  public id_genero_media!: number;
  public id_tipo_media!: number;
  public duracao!: string;
  public arquivo!: string;
  public id_formato_media!: number;
  public tamanho!: string;
  public data!: string;
  public id_perfil_usuario?: number | null;
  public estado!: boolean;
}

Midia.init(
  {
    id_midia: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    id_legenda: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    id_genero_media: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    id_tipo_media: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    duracao: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    arquivo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    id_formato_media: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    tamanho: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    data: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    id_perfil_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    imagem: "",
  },
  {
    sequelize: connection,
    tableName: "midia",
    timestamps: true,
  }
);

Midia.belongsTo(FormatoMedia, {
  foreignKey: "id_formato_media",
  as: "formatoMedia",
});
Midia.belongsTo(UserProfile, {
  foreignKey: "id_perfil_usuario",
  as: "perfilUsuario",
});
Midia.belongsTo(Legenda, { foreignKey: "id_legenda", as: "legenda" });
Midia.belongsTo(GeneroMedia, {
  foreignKey: "id_genero_media",
  as: "generoMedia",
});
Midia.belongsTo(TipoMedia, { foreignKey: "id_tipo_media", as: "tipoMedia" });

export default Midia;
