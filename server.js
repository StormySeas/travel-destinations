const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.get('/', (req, res) => {
    console.log('Its alive')
    res.send('Its alive')
})


app.listen(3000, () => {
  console.log('andre 3000 listening')
})
