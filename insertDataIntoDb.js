const Question = require('./models/Question')
const connectDB = require('./config/database')
require('dotenv').config({path: './config/.env'})
const { questions } = require("./questions")

connectDB()

Question.insertMany(questions)
.then(function(){
  console.log("Data inserted")  // Success
}).catch(function(error){
  console.log(error)      // Failure
});