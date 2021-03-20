var express = require('express');
var router = express.Router();
var db = require('../database');
var data = require('./data');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const results = await db.User.findAll({raw:true});
  console.log(results);
  res.json({haha:`respond with a resource ${results}`});

});

router.post('/:data', async function(req, res, next) {
  //const result = await db.Market.create({ username:, email:, marketname:, location:, availablestalls:, yocoaccount:, stalls:});

  if (req.params.data=="stall"){
    res.json(data.Stallowners)
  }
  else if (req.params.data=="market"){
  res.json(data.MarketOwners)
  }
  res.json({request_data:"No matched data", data_created:"no"});

});

module.exports = router;
