const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
      //   type: DataTypes.UUID,
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      email: {
         // validate:{isEmail: }
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
