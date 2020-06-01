module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define(
    'Bookings',
    {
      fac_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {}
  );
  Bookings.associate = function(models) {
    Bookings.belongsTo(models.User);
    Bookings.belongsTo(models.Facilities);
  };
  return Bookings;
};
