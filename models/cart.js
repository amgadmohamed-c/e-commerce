const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    const Cart = sequelize.define('Cart', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    }, {
        tableName: 'carts',
        timestamps: true
    });


    Cart.associate = (models) => {

        Cart.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });

        Cart.hasMany(models.Cartitem, {
            foreignKey: 'cartId',
            as: 'items'
        });

    };


    return Cart;
};
