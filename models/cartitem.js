
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('cartitem', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'products',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cartId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'cart',
                key: 'id'
            }
        }
    })
} ;
