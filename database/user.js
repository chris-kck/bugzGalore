module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
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
        location: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return User;

};
