'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        static associate(models) {
            // define association here
        }
    };
    Book.init({
        name: DataTypes.STRING,
        author: DataTypes.STRING,
        category: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Book',
    });
    return Book;
};