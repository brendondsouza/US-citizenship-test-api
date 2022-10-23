const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const apiRoutes = require('./routes/questions')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/api', apiRoutes)


// app.get('/', (req,res) => {
//   res.sendFile(__dirname + '/index.html')
// })

// app.get('/api', (req,res) => {
//   res.json(questions)
// })

// app.get('/api/random', (req,res) => {
//   const random = Math.ceil(Math.random()*100)-1
//   res.json(questions[random])
// })

// app.get('/api/government', (req,res) => {
//   let arr = questions.filter(el => el.topic === 'American Government')
//   res.json(arr)
// })

// app.get('/api/government/random', (req,res) => {
//   const random = Math.ceil(Math.random()*57)-1
//   res.json(questions[random])
// })

// app.get('/api/history', (req,res) => {
//   let arr = questions.filter(el => el.topic === 'American History')
//   res.json(arr)
// })

// app.get('/api/history/random', (req,res) => {
//   const random = (Math.ceil(Math.random()*30)-1) + 57
//   res.json(questions[random])
// })

// app.get('/api/civics', (req,res) => {
//   let arr = questions.filter(el => el.topic === 'Integrated Civics')
//   res.json(arr)
// })

// app.get('/api/civics/random', (req,res) => {
//   const random = (Math.ceil(Math.random()*12)-1) + 87
//   res.json(questions[random])
// })

app.listen(process.env.PORT, () => {
  console.log('Server is running, you better catch it!')
})
