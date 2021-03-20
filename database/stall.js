module.exports = (sequelize, DataTypes) => {
    const Stall = sequelize.define('Stallowner', {
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
        prooducts: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stallname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
        type: DataTypes.STRING,
            allowNull: false
    }
    });

    return Stall;

};
