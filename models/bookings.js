'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define('Bookings', {
    fac_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    slots: DataTypes.INTEGER
  }, {});
  Bookings.associate = function(models) {
    // associations can be defined here
  };
  return Bookings;
};