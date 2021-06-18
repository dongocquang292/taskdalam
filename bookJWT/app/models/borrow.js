'use strict';
module.exports = (sequelize, DataTypes) => {
  const Borrow = sequelize.define('Borrow', {
    bookId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Borrow.associate = function (models) {
    // associations can be defined here
  };
  return Borrow;
};