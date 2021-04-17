"use strict";
const express = require('express');
const router = express.Router();
const QuestModel = require('../apps/models/quest_model');


router.get('/', async function(req, res, next) {
  var data = {};
  data.title = 'IBISLiftJS';
  console.info('quest route');
  const questList = await QuestModel.list(100, 0);
  data.quests = questList;
  console.info('quests', data.quests);
  return res.render('quests', data);
});

module.exports = router;