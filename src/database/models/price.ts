import { Model, DataTypes, Association } from 'sequelize';
import { sequelize } from './index';
import Store from './store';
import Fertilizer from './fertilizer';
import Seed from './seed';

class Price extends Model {
  public id!: number;
  public store_id!: number;
  public fertilizer_id!: number;
  public seed_id!: number;
  public amount!: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: {
    store: Association<Store, Price>;
    fertilizer: Association<Fertilizer, Price>;
    seed: Association<Seed, Price>;
  };
}

Price.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  store_id: DataTypes.INTEGER,
  fertilizer_id: DataTypes.INTEGER,
  seed_id: DataTypes.INTEGER,
  amount: DataTypes.INTEGER,
}, {
  sequelize,
  tableName: 'prices',
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
},);

export default Price;
