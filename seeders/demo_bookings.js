module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Bookings',
      [
        {
          fac_id: 1,
          user_id: 2,
          length: 3,
          starttime: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fac_id: 2,
          user_id: 1,
          length: 2,
          starttime: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fac_id: 3,
          user_id: 4,
          length: 3,
          starttime: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fac_id: 4,
          user_id: 3,
          length: 2,
          starttime: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fac_id: 5,
          user_id: 5,
          length: 1,
          starttime: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Bookings', null, {}),
};
