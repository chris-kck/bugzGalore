/*                db.js -- Database object configuration                  */
/*           verbose = long stack traces, for development only            */

//Load modules
var UserModel = require('./user');
var Sequelize = require('sequelize');
var pg = require('pg');



    const user = process.env.DB_USER || 'postgres';
    const host = process.env.DB_HOST || 'localhost';
    const database = process.env.DB_NAME || 'postgres';
    const password = 'postgres' || process.env.DB_PWD;
    const port = 5432 || +process.env.DB_PORT;

    const sequelize = new Sequelize(database, user, password, {
        host,
        port,
        dialect: 'postgres',
        logging: false,
    })

    try {
        sequelize.authenticate().then().catch();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }


    //await sequelize.sync({ force: true }).then(res=>console.log((res.toString()));



//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
const User = UserModel( sequelize, Sequelize);

const db = {};
db.Sequelize= Sequelize;
db.sequelize = sequelize;
db.User = User;

//db.sequelize.sync();
//drop each time the app restarts
User.sync({ force: true}).then(() => {
    console.log("Drop and re-sync db.");

}).then(()=>insertdata(User));
//insertdata(User);
//Insert Latest CSV DATA into DB function accepts row object with keys.
async function insertdata(User){

    const name = 'Roger';
    const age = 8;
    const result = await User.create({ name, age });

    const results = await User.findAll()
    return results;
    console.log("Getdata ran");
}

module.exports = db;
