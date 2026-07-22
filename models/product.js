const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const Product = sequelize.define('Product', {

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
        },

        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },

        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    }, {
        tableName: 'products',
        timestamps: true
    });


    Product.associate = (models) => {

        Product.belongsTo(models.Category, {
            foreignKey: 'categoryId',
            as: 'category'
        });

        Product.hasMany(models.Cartitem, {
            foreignKey: 'productId',
            as: 'cartItems'
        });

    };


    return Product;
};
