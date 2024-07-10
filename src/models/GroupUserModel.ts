import { DataTypes, Model } from "sequelize";
import connection from "../database/index";
import GroupModel from "./groupModel";
import UserProfile from "./UserProfile";

interface GrupoUsuarioAttributes {
  id_grupo_usuario?: number;
  id_grupo: number;
  id_perfil_usuario: number;
  id_papel_usuario_grupo: number;
  data_entrada: Date;
}

class GrupoUsuario extends Model implements GrupoUsuarioAttributes {
  id_grupo_usuario!: number;
  id_grupo!: number;
  id_perfil_usuario!: number;
  id_papel_usuario_grupo!: number;
  data_entrada!: Date;
}

GrupoUsuario.init(
  {
    id_grupo_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_grupo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    id_perfil_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    id_papel_usuario_grupo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    data_entrada: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: connection,
    tableName: "grupo_usuario",
    timestamps: true,
  }
);
GrupoUsuario.belongsTo(GroupModel, {
  foreignKey: "id_grupo",
  as: "grupo",
});
GrupoUsuario.belongsTo(UserProfile, {
  foreignKey: "id_perfil_usuario",
  as: "perfil_usuario",
});
export default GrupoUsuario;
