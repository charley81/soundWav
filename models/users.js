module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {}
  );
  Users.associate = function(models) {
    Users.hasMany(models.Bookings, { foreignKey: user_id });
  };
  return Users;
};
