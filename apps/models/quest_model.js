"use strict";
const questDB = require('../quest_database');


class QuestModel {

  constructor() {
    //TODO
  }

  async list(limit, skip) {
    console.info('qm',limit,skip);
    return await questDB.list(limit, skip);
  };

}

const instance = new QuestModel();
module.exports = instance;
