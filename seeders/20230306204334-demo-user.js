"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          id: 1,
          name: "test1",
          email: "test1@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "test2",
          email: "test2@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "test3",
          email: "test3@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "channel",
      [
        {
          id: 1,
          name: "channel1",
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "channel2",
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "channel3",
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "video",
      [
        {
          id: 1,
          title: "video1ByUser1",
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: "video2ByUser2",
          channel_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          title: "video3ByUser3",
          channel_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
