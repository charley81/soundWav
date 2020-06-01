module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          first_name: 'John',
          last_name: 'Doe',
          phone: '555-555-5555',
          email: 'jdoe@gmail.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'Jane',
          last_name: 'Doe',
          phone: '222-222-2222',
          email: 'jdoe2@gmail.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'Mike',
          last_name: 'Jones',
          phone: '770-990-9087',
          email: 'mjones@gmail.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'Pastor',
          last_name: 'Troy',
          phone: '678-009-2354',
          email: 'ptgb@gmail.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'Jim',
          last_name: 'Smith',
          phone: '770-887-5436',
          email: 'jdoe@gmail.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Users', null, {}),
};
