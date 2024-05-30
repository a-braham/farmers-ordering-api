import { Model, DataTypes, Association } from 'sequelize';
import { sequelize } from './index';
import User from './user';

class Seed extends Model {
  public id!: number;
  public name!: string;
  public fertilizer_id!: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: {
    fertilizer: Association<User, Seed>;
  };
}

Seed.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: DataTypes.STRING,
  fertilizer_id: DataTypes.INTEGER,
}, {
  sequelize,
  tableName: 'seeds',
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
},);

export default Seed;
