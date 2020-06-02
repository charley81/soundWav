module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Bookings', // table name
        'endtime', // new field name
        {
          // allowNull: false,
          // allowNull: false,
          type: Sequelize.DATE,
        }
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([queryInterface.removeColumn('Bookings', 'endtime')]);
  },
};
