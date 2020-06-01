module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Users', // table name
        'password', // new field name
        {
          //allowNull: false,
          isPassword: true,
          type: Sequelize.STRING,
        },
      ),

    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('Users', 'password'),

    ]);
  },
};