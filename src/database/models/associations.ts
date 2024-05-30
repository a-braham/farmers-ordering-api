import User from './user';
import Token from './token';
import Price from './price';
import Store from './store';
import Fertilizer from './fertilizer';
import Seed from './seed';
import Purchase from './purchase';
import Transaction from './transaction';
import UserRole from './users_roles';
import Role from './role';

Token.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

Price.belongsTo(Store, {
  foreignKey: 'store_id',
  as: 'store',
});

Price.belongsTo(Fertilizer, {
  foreignKey: 'fertilizer_id',
  as: 'fertilizer',
});

Price.belongsTo(Seed, {
  foreignKey: 'seed_id',
  as: 'seed',
});

Purchase.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

Purchase.belongsTo(Store, {
  foreignKey: 'store_id',
  as: 'store',
});

Purchase.belongsTo(Fertilizer, {
  foreignKey: 'fertilizer_id',
  as: 'fertilizer',
});

Purchase.belongsTo(Seed, {
  foreignKey: 'seed_id',
  as: 'seed',
});

Seed.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

Transaction.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

Transaction.belongsTo(Store, {
  foreignKey: 'store_id',
  as: 'store',
});

Transaction.belongsTo(Fertilizer, {
  foreignKey: 'fertilizer_id',
  as: 'fertilizer',
});

Transaction.belongsTo(Seed, {
  foreignKey: 'seed_id',
  as: 'seed',
});

UserRole.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

UserRole.belongsTo(Role, {
  foreignKey: 'role_id',
  as: 'role',
});

export {};
