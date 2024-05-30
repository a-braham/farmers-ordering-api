import { Model, DataTypes, Association } from 'sequelize';
import { sequelize } from './index';
import User from './user';
import Store from './store';
import Fertilizer from './fertilizer';
import Seed from './seed';

class Purchase extends Model {
  public id!: number;
  public user_id!: number;
  public store_id!: number;
  public seed_id!: number;
  public fertilizer_id!: number;
  public price!: number;
  public amount!: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: {
    user: Association<User, Purchase>;
    store: Association<Store, Purchase>;
    fertilizer: Association<Fertilizer, Purchase>;
    seed: Association<Seed, Purchase>;
  };
}

Purchase.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  user_id: DataTypes.INTEGER,
  store_id: DataTypes.INTEGER,
  seed_id: DataTypes.INTEGER,
  fertilizer_id: DataTypes.INTEGER,
  price: DataTypes.INTEGER,
  amount: DataTypes.INTEGER,
}, {
  sequelize,
  tableName: 'purchases',
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
},);

export default Purchase;
