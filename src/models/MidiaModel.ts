import { DataTypes, Model } from "sequelize";
import connection from "../database/index";
import UserProfile from "./UserProfile";
import Legenda from "./LegendaModel";
import GeneroMedia from "./GeneroMediaModel";
import TipoMedia from "./TipoMediaModel";
import { MidiaDTO } from "../utils/Types";

class Midia extends Model<MidiaDTO> implements MidiaDTO {
  public imagem!: Buffer;
  public id_midia!: number;
  public titulo!: string;
  public id_legenda!: number;
  public id_genero_media!: number;
  public id_tipo_media!: number;
  public duracao!: string;
  public arquivo!: string;
  public formato_media!: string;
  public tamanho!: string;
  public data!: string;
  public id_perfil_usuario!: number;
  public estado!: boolean;
  public descricao!: string;
  public visibilidade!: string;
  createdAt: any;
  updatedAt: any;
  tipoMedia: any;
  perfilUsuario: any;
  legenda: any;
  generoMedia: any;
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
      allowNull: true,
    },
    descricao: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    id_legenda: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    id_genero_media: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    id_tipo_media: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    duracao: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    arquivo: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    formato_media: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    tamanho: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    data: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    id_perfil_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    imagem: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    },
    visibilidade: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    tableName: "midia",
    timestamps: true,
  }
);

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
