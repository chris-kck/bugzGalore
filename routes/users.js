var express = require('express');
var router = express.Router();
var db = require('../database');
/* GET users listing. */
router.get('/', async function(req, res, next) {
  const results = await db.User.findAll({raw:true});
  console.log(results);
  res.json({haha:`respond with a resource ${results}`});

});

router.post('/', async function(req, res, next) {
  console.log(results);
  //const result = await db.Market.create({ username:, email:, marketname:, location:, availablestalls:, yocoaccount:, stalls:});
  res.json({request_data:`${req.body}`, data_created:"no"});

});

module.exports = router;
