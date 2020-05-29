module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Facilities',
      [
        {
          name: 'Studio A',
          cost: '500',
          availability: 'Unavailable',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Studio B',
          cost: '400',
          availability: 'Unavailable',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Studio C',
          cost: '350',
          availability: 'Unavailable',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Studio D',
          cost: '250',
          availability: 'available',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Studio E',
          cost: '150',
          availability: 'Unavailable',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Studio F',
          cost: '150',
          availability: 'available',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Facilities', null, {}),
};
