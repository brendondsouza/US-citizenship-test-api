const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  subTopic: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Question', QuestionSchema)