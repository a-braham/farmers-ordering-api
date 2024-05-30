import { Model, DataTypes, Association } from 'sequelize';
import { sequelize } from './index';
import User from './user';
import Role from './role';

class UserRole extends Model {
  public id!: number;
  public user_id!: number;
  public role_id!: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: {
    user: Association<User, UserRole>;
    role: Association<Role, UserRole>;
  };
}

UserRole.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  user_id: DataTypes.INTEGER,
  role_id: DataTypes.INTEGER,
}, {
  sequelize,
  tableName: 'users_roles',
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
},);

export default UserRole;
