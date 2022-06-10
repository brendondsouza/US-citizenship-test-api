const express = require('express')
const { questions } = require("./questions")
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req,res) => {
  res.json(questions)
})

app.get('/api/random', (req,res) => {
  const random = Math.ceil(Math.random()*100)-1
  res.json(questions[random])
})

app.get('/api/government', (req,res) => {
  let arr = questions.filter(el => el.topic === 'American Government')
  res.json(arr)
})

app.get('/api/government/random', (req,res) => {
  const random = Math.ceil(Math.random()*57)-1
  res.json(questions[random])
})

app.get('/api/history', (req,res) => {
  let arr = questions.filter(el => el.topic === 'American History')
  res.json(arr)
})

app.get('/api/history/random', (req,res) => {
  const random = (Math.ceil(Math.random()*30)-1) + 57
  res.json(questions[random])
})

app.get('/api/civics', (req,res) => {
  let arr = questions.filter(el => el.topic === 'Integrated Civics')
  res.json(arr)
})

app.get('/api/civics/random', (req,res) => {
  const random = (Math.ceil(Math.random()*12)-1) + 87
  res.json(questions[random])
})

app.listen(process.env.PORT || PORT, () => {
  console.log("Running")
})
