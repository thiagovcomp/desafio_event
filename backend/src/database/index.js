import 'dotenv/config';

import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect('mongodb://localhost:27017/desafioDito', {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();