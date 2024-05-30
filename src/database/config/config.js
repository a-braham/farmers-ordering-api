const pool = {
  max: 25,
  min: 0,
  acquire: 70000,
  idle: 30000,
};

const config = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    logging: false,
    seederStorage: 'sequelize',
    pool,
  },
  test: {
    use_env_variable: 'DATABASE_URL_TEST',
    dialect: 'postgres',
    logging: false,
    seederStorage: 'sequelize',
    pool,
  },
  production: {
    logging: false,
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    pool,
  },
};

module.exports = config;
  