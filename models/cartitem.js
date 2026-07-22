const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const Cartitem = sequelize.define('Cartitem', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        cartId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        orderId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    }, {
        tableName: 'cartitems',
        timestamps: true
    });


    Cartitem.associate = (models) => {

        Cartitem.belongsTo(models.Cart, {
            foreignKey: 'cartId',
            as: 'cart'
        });


        Cartitem.belongsTo(models.Product, {
            foreignKey: 'productId',
            as: 'product'
        });


        Cartitem.belongsTo(models.Order, {
            foreignKey: 'orderId',
            as: 'order'
        });

    };


    return Cartitem;
};
