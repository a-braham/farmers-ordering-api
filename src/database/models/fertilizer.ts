import { Model, DataTypes, Association } from 'sequelize';
import { sequelize } from './index';
import User from './user';

class Fertilizer extends Model {
  public id!: number;
  public name!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: {};
}

Fertilizer.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: DataTypes.STRING,
}, {
  sequelize,
  tableName: 'fertilizers',
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
},);

export default Fertilizer;
