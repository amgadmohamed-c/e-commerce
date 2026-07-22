module.exports = (sequelize) => {
    return sequelize.define("Order", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        totalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    });
};
