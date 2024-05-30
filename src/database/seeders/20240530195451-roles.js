const dayjs = require("dayjs");

const created_at = dayjs().format();
const updated_at = created_at;

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "roles",
      [
        {
          name: "Farmer",
          created_at,
          updated_at,
        },
        {
          name: "Store",
          created_at,
          updated_at,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("roles", null, {});
  },
};
