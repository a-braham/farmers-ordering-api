import { Model, DataTypes, Association } from 'sequelize';
import { sequelize } from './index';

class User extends Model {
  public id!: number;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public phone!: string;
  public password!: string;
  public status!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: {};
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  password: DataTypes.STRING,
  status: DataTypes.STRING,
}, {
  sequelize,
  tableName: 'users',
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
},);

export default User;
