import { Model, DataTypes, Association } from 'sequelize';
import { sequelize } from './index';
import User from './user';

class Token extends Model {
  public id!: number;
  public token!: string;
  public user_id!: number;
  public status!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: {
    user: Association<User, Token>;
  };
}

Token.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  token: DataTypes.TEXT,
  user_id: DataTypes.INTEGER,
  status: DataTypes.STRING,
}, {
  sequelize,
  tableName: 'tokens',
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
},);

export default Token;
