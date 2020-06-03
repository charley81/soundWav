module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Bookings', // table name
        'date', // new field name
        {
          // allowNull: false,
          // allowNull: false,
          type: Sequelize.DATEONLY,
        }
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([queryInterface.removeColumn('Bookings', 'endtime')]);
  },
};
