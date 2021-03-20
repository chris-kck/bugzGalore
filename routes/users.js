var express = require('express');
var router = express.Router();
var db = require('../database');
/* GET users listing. */
router.get('/', async function(req, res, next) {
  const results = await db.User.findAll();
  console.log(results);
  res.send('respond with a resource');

});

module.exports = router;
