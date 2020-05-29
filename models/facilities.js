'use strict';
module.exports = (sequelize, DataTypes) => {
  const Facilities = sequelize.define('Facilities', {
    name: DataTypes.STRING,
    cost: DataTypes.NUMERIC,
    availability: DataTypes.STRING
  }, {});
  Facilities.associate = function(models) {
    // associations can be defined here
  };
  return Facilities;
};