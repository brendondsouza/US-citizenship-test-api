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
            const random = Math.ceil(Math.random()*100)-1
            res.render('questions.ejs', {questions: questions[random]})
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
            const random = Math.ceil(Math.random()*57)-1
            res.render('questions.ejs', {questions: questions[random]})
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
        const random = (Math.ceil(Math.random()*30)-1) + 57
        res.render('questions.ejs', {questions: questions[random]})
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
        const questions = await Question.find({topic: "Integrated Civics"})
        const random = (Math.ceil(Math.random()*12)-1) + 87
        res.render('questions.ejs', {questions: questions[random]})
        
    }catch(err){
        console.log(err)
    }
}
}  