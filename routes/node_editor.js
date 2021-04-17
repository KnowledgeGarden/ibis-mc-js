"use strict";
const express = require('express');
const router = express.Router();


router.get('/nodeed',  function(req, res, next) {
  var data = {};
  data.title = 'IBISLiftJS';
  
  return res.render('node_editor', data);

});

module.exports = router;