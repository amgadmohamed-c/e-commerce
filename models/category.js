const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const Category = sequelize.define('Category', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {
        tableName: 'categories',
        timestamps: true
    });


    Category.associate = (models) => {

        Category.hasMany(models.Product, {
            foreignKey: 'categoryId',
            as: 'products'
        });

    };


    return Category;
};
