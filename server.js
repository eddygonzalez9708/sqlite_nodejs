const express = require('express')

// middleware to handle HTTP POST request
// extract the entire body portion of an incoming request and exposes
const bodyParser = require('body-parser')

const app = express()

app.set('port', (process.env.PORT || 5000))
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'NODEJS - SQLITE DEMO'
  })
})

app.listen(app.get('port'), () => {
  console.log('Listening to port: ', app.get('port'))
})