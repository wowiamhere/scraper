// for express

const express = require('express')
const app = module.exports = express()


// 		for caching the post_id
const node_cache = require('node-cache')
var cache_options = { 
	stdTTL: 0, 
	checkperiod: 0, 
	maxKeys: 20 }
const post_id_cache = new node_cache(cache_options)	


const port = 3000

app.set('views', './views')
app.set('view engine', 'pug')

const scraper = require('./scraper')
const post_id_cache_add = require('./post_id_cache_add.js')

app.use(scraper)
app.use(post_id_cache_add(post_id_cache))

app.get('/', function(req, res, next) {

	res.render('index', { 
		title: 'Scraper', 
		message: 'Data Analizer', 
		info: res.post_ids 
	})


	next()
} )

setInterval( () => console.log("---->cache------> " + post_id_cache.get(17)), 50000);

app.listen(port, () => {console.log("Listening (Port 3000)")})

