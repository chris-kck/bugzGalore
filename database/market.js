

module.exports = (Sequelize, sequelize, DataTypes) => {

    const Marketowner = sequelize.define('Marketowner', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marketname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        availablestalls: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        yocoaccount: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stalls: {
            type: Sequelize.JSONB,
            allowNull: false
        }
    });

    return Marketowner;

};
