module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.changeColumn(
      'Bookings', // name of Source table
      'fac_id', // name of the key we're adding
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Facilities', // name of Target table
          key: 'id', // key in Target table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.removeColumn(
      'Bookings', // name of Source table
      'fac_id' // key we want to remove
    ),
};
