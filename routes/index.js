
"use strict";
const express = require('express');
const router = express.Router();
const LandingModel = require('../apps/models/landing_model');


/* GET home page. */
router.get('/', /*async*/ (req, res, next) => {
  //NodeModel.list(function(err, noteList) {
    var data = {};
    try {
   
    data.title = 'IBISLiftJS';
    //data.noteList = noteList;
    } catch (err) {}
    return res.render('index', data);
});


/**
 * Get page identified by its slug
 * /
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var data = {};
  data.title = 'LiteNet';
  data.id = id;
  return res.render('index', data);
});

router.post('/postnote', function(req, res, next) {
  var subject = req.body.subject;
  var predicate = req.body.predicate;
  var object = req.body.object;
  var url = req.body.url;
  var notes = req.body.notes;
  console.info('XXX', subject, predicate, object, url, notes);
  
  NodeModel.processTriple(subject, predicate, object, url, notes, function(err, dat) {
    NodeModel.list(function(err, noteList) {
      var data = {};
      data.title = 'LiteNet';
      data.noteList = noteList;
      return res.render('index', data);
    });  
  });
});

router.post('/posttopic', function(req, res, next) {
  var body = req.body.body;
  var id = req.body.topicid;
  console.info("PostTopic", id, body);
  NodeModel.updateTopic(id, body, function(err) {
    return res.redirect('/topic/'+id);
  });
});

router.get('/topic/:id', function(req, res, next) {
  var id = req.params.id;
  NodeModel.getTopic(id, function(err, data) {
    data.title = 'LiteNet';
    data.id = id;
    return res.render('topicview', data);
  });
});

router.get('/journal/:id', function(req, res, next) {
  var id = req.params.id;
  console.info("GetJournal", id);
  NodeModel.getJournalEntry(id, function(err, data) {
    data.title = 'LiteNet';
    return res.render('journalview', data);
  });
*/
//});


module.exports = router;
