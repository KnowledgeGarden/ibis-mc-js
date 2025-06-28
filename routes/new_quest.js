"use strict";
const express = require('express');
const router = express.Router();


router.get('/',  function(req, res, next) {
  var data = {};
  data.title = 'New Quest';
  
  return res.render('newquest_form', data);

});

module.exports = router;