// for express

const express = require('express')
const app = module.exports = express()

const port = 3000

app.set('views', './views')
app.set('view engine', 'pug')

const s = require('./scraper')

app.use(s)

app.get('/', function(req, res, next) {

	res.render('index', { 
		title: 'Scraper', 
		message: 'Data Analizer', 
		info: res.info 
	})

	next()
} )


app.listen(port, () => {console.log("Listening (Port 3000)")})

