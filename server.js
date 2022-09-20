// ----------- Import Modules ------------
import express from 'express'

// ----- Import Student Data ---------
import { students } from './data/student-data.js'


// -------- Create Express App ------------
const app = express()


// ----- Configure the App (app.set) -------



// -------- Mount Routes ----------------
app.get('/', function(req, res) {
  res.send('<h1>Hello, students!</h1>')
})





// ---- Set Up Local Host 3000 ---------
app.listen(3000, function() {
  console.log('Listening on port 3000');
})