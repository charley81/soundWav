module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Bookings',
      [
        {
          fac_id: 1,
          user_id: 2,
          slots: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fac_id: 2,
          user_id: 1,
          slots: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fac_id: 3,
          user_id: 4,
          slots: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fac_id: 4,
          user_id: 3,
          slots: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fac_id: 5,
          user_id: 5,
          slots: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Bookings', null, {}),
};
