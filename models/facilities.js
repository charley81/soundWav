module.exports = (sequelize, DataTypes) => {
  const Facilities = sequelize.define(
    'Facilities',
    {
      name: DataTypes.STRING,
      cost: DataTypes.NUMERIC,
      availability: DataTypes.STRING,
    },
    {}
  );
  Facilities.associate = function(models) {
    Facilities.hasMany(models.Bookings, { foreignKey: 'fac_id' });
  };
  return Facilities;
};
