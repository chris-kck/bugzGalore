var express = require('express');
var axios = require('axios');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    axios.post('https://online.yoco.com/v1/charges/', {
      token: req.body.token,
      currency: 'ZAR',
      amountInCents: 5000
    }, {
      headers: {
        'X-Auth-Secret-Key': 'sk_test_960bfde0VBrLlpK098e4ffeb53e1'
      }
    })
        .then(response => {
          res.send(response.data);
        })
        .catch(error => {
          res.send(error.response.data);
        })
});

module.exports = router;
