var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  data = {};
  data.title = 'IBISLiftJS';
  return res.render('users', data);
});

module.exports = router;
