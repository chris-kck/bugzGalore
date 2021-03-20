var express = require('express');
var router = express.Router();
var db = require('../database');
/* GET users listing. */
router.get('/', async function(req, res, next) {
  const results = await db.User.findAll();
  console.log(results);
  res.json({haha:`respond with a resource ${results}`});

});

module.exports = router;
