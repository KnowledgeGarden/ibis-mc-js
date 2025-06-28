"use strict";
const express = require('express');
const router = express.Router();


router.get('/',  function(req, res, next) {
  var data = {};
  data.title = 'Node Editor';
  
  return res.render('node_form', data);

});

module.exports = router;