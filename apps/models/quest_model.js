"use strict";
const questDB = require('../quest_database');


class QuestModel {

  constructor() {
    //TODO
  }

  /**
    @param jsonData - defines the quest
    @return error
   */
  async new_quest(jsonData) {
    var error = {};
    //TODO must route to newquest_form.hbs which is populated here.
    return error;
  }

  async list(limit, skip) {
    console.info('qm',limit,skip);
    return await questDB.list(limit, skip);
  };

}

const instance = new QuestModel();
module.exports = instance;
