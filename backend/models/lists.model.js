  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    url: { type: String, required: true },
    date: { type: Object, required: true },
    tags: {type: }
  }, {
    timestamps: true,
  });
  
  const Exercise = mongoose.model('Exercise', exerciseSchema);
  
  module.exports = Exercise;