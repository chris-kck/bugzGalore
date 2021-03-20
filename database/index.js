/*                db.js -- Database object configuration                  */
/*           verbose = long stack traces, for development only            */

//Load modules
var UserModel = require('./user');
var MarketModel = require('./market');
var StallModel = require('./stall');
var Sequelize = require('sequelize');

    const user = process.env.DB_USER || 'postgres';
    const host = process.env.DB_HOST || 'localhost';
    const database = process.env.DB_NAME || 'postgres';
    const password = process.env.DB_PWD || 'postgres';
    const port = 5432 || +process.env.DB_PORT;

    const sequelize = new Sequelize(database, user, password, {
        host,
        port,
        dialect: 'postgres',
        logging: false,
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }

    })

    try {
        sequelize.authenticate().then().catch((e)=>{console.log(e)});
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }


    //await sequelize.sync({ force: true }).then(res=>console.log((res.toString()));


//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
const User = UserModel( sequelize, Sequelize);
    const Market = MarketModel( Sequelize, sequelize, Sequelize);
const Stall = StallModel( sequelize, Sequelize);

const db = {};
db.Sequelize= Sequelize;
db.sequelize = sequelize;
db.User = User;
db.Market = Market;
db.Stall = Stall;

//db.sequelize.sync();
//drop each time the app restarts
db.sequelize.sync({ force: true}).then(() => {
    console.log("Drop and re-sync db.");
    insertdata();
}).finally(()=>insertdata());

//insertdata(User).then((res)=>console.log(res));

async function insertdata(){

    const username = 'Rogerd';
    const email = "ee@hjdf.com"
    const location = "hsfdsd";
    const marketname = 'marketname';
    const availablestalls = '5';
    const yocoaccount = "YOCOaCC";
    const stalls = {st1:"result", st2:"res2" };
    const result = await User.create({ username, email, location });

    const result1 = await Market.create({ username, email, marketname, location, availablestalls, yocoaccount, stalls});

    const results = await User.findAll()
    return {results:result, results1: result1, resp: results};
    console.log("Getdata ran");
}

module.exports = db;
