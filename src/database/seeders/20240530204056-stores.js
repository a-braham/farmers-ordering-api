const dayjs = require("dayjs");

const created_at = dayjs().format();
const updated_at = created_at;

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "stores",
      [
        {
          name: "Kigali Agro-Tech Store",
          created_at,
          updated_at,
        },
        {
          name: "Nyarugenge Agro-Tech Store",
          created_at,
          updated_at,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("stores", null, {});
  },
};
