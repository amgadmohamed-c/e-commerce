const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const Order = sequelize.define('Order', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        totalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    }, {
        tableName: 'orders',
        timestamps: true
    });


    Order.associate = (models) => {

        Order.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });


        Order.hasMany(models.Cartitem, {
            foreignKey: 'orderId',
            as: 'items'
        });

    };


    return Order;
};
