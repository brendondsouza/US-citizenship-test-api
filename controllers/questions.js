const Question = require('../models/Question')

module.exports = {
  getApi: async (req,res)=>{
        try{
            const questions = await Question.find()
            res.render('questions.ejs', {questions: questions})
        }catch(err){
            console.log(err)
        }
    },
    getApiRandom: async (req, res)=>{
        try{
            const questions = await Question.find()
            res.render('questions.ejs', {questions: questions})
        }catch(err){
            console.log(err)
        }
    },
    getGovernment: async (req, res)=>{
        try{
            const questions = await Question.find({topic:"American Government"})
            res.render('questions.ejs', {questions: questions})
        }catch(err){
            console.log(err)
        }
    },
    getGovernmentRandom: async (req, res)=>{
        try{
            const questions = await Question.find({topic:"American Government"})
            res.render('questions.ejs', {questions: questions})
        }catch(err){
            console.log(err)
        }
    },
    getHistory: async (req, res)=>{
      try{
        const questions = await Question.find({topic:"American History"})
        res.render('questions.ejs', {questions: questions})
      }catch(err){
          console.log(err)
      }
  },
  getHistoryRandom: async (req, res)=>{
      try{
        const questions = await Question.find({topic:"American History"})
        res.render('questions.ejs', {questions: questions})
      }catch(err){
          console.log(err)
      }
  },
  getCivics: async (req, res)=>{
    try{
        const questions = await Question.find({topic:"Integrated Civics"})
        res.render('questions.ejs', {questions: questions})
    }catch(err){
        console.log(err)
    }
},
getCivicsRandom: async (req, res)=>{
    try{
        const questions = await Question.find()
        res.render('questions.ejs', {topic: "Integrated Civics"})
    }catch(err){
        console.log(err)
    }
}
}  