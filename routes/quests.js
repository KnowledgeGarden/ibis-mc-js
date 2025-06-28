"use strict";
const express = require('express');
const router = express.Router();
const QuestModel = require('../apps/models/quest_model');


router.get('/', async function(req, res, next) {
  const data = {};
  data.title = 'IBISLiftJS';
  console.info('quest route');
  const questList = await QuestModel.list(100, 0);
  data.quests = questList;
  console.info('quests', data.quests);
  return res.render('quests', data);
});

router.get('/createquest', function(req, res, next) {
  const data = {};
  data.title = 'New Quest';
  return res.redirect('/newquest');

});

router.post('newquest', async function(req, res, next) {
  var jsonData = {};
  //TODO deal with the quest data

  const error = await QuestModel.new_quest(jsonData);
  //TODO deal with error
  return 
});
module.exports = router;