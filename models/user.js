const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        role: {
            type: DataTypes.ENUM('admin', 'user'),
            defaultValue: 'user',
            allowNull: false
        }

    }, {
        tableName: 'users',
        timestamps: true
    });


    User.associate = (models) => {
        User.hasOne(models.Cart, {
            foreignKey: 'userId',
            as: 'cart'
        });

        User.hasMany(models.Order, {
            foreignKey: 'userId',
            as: 'orders'
        });
    };


    return User;
};
