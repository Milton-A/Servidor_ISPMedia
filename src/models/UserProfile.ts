import { DataTypes, Model } from "sequelize";
import connection from "../database/index";
import UserModel from "./UserModel";

class UserProfile extends Model {
  id_perfil_usuario!: number;
  id_usuario!: number;
  username!: string;
  avatar?: string | null;
  bio!: string | null;
  senha!: string;
}

UserProfile.init(
  {
    id_perfil_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    senha: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "perfil_usuario",
    timestamps: true,
  }
);
UserProfile.belongsTo(UserModel, {
  foreignKey: "id_usuario",
  as: "user",
});
export default UserProfile;
