import { Model, DataTypes, Association } from 'sequelize';
import { sequelize } from './index';
import User from './user';
import Store from './store';
import Fertilizer from './fertilizer';
import Seed from './seed';

class Transaction extends Model {
  public id!: number;
  public amount!: number;
  public name!: string;
  public user_id!: number;
  public store_id!: number;
  public fertilizer_id!: number;
  public seed_id!: number;


  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: {
    user: Association<User, Transaction>;
    store: Association<Store, Transaction>;
    fertilizer: Association<Fertilizer, Transaction>;
    seed: Association<Seed, Transaction>;
  };
}

Transaction.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  }, 
  amount: DataTypes.INTEGER,
  status: DataTypes.STRING,
  user_id: DataTypes.INTEGER,
  store_id: DataTypes.INTEGER,
  fertilizer_id: DataTypes.INTEGER,
  seed_id: DataTypes.INTEGER,
}, {
  sequelize,
  tableName: 'transactions',
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
},);

export default Transaction;
