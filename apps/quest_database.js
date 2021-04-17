"use strict";
const Datastore = require('nedb-promises');

class QuestDatabase {
  constructor() {
    this.db = new Datastore({ filename: './data/quests' , autoload: true });
    console.info(`Database ${this.db}`);
  }

  /**
   * Persist an account
   * @param struct
   */
  async saveAccount(struct) {
    return await this.db.insert(struct);
  };

  /**
   * Report {@code true} if database is empty
   */
  async isEmpty() {
    const doc = await this.db.find({});
    console.info("UserEmpty", doc);
    return (doc && doc.length > 0);
  };

  /**
   * Return an account or {@code null}
   * @param email
   */
  async fetchQuest(ID) {
    return await this.db.findOne({ ID });
  }

  async list(limit, skip) {
    console.info('JnlList', limit, skip);
    const result = await Promise.all([this.db.find({}).sort({ date: -1 }).limit(limit).skip(skip), this.db.count({})]);
    console.info('questList-1', result);
    return result;
  }
}

const instance = new QuestDatabase();
module.exports = instance;
