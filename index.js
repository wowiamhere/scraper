// for express
const express = require('express')
const app = module.exports = express()

const port = 3000

app.set('views', './views')
app.set('view engine', 'pug')

/*
const pup = require('puppeteer')

var s = async function getData(req, res, next){

	const browser = await pup.launch()
	const page = await browser.newPage()

	await page.goto('https://www.facebook.com/pg/centralcastinglosangeles/posts/', 
		{ waitUntil: 'load' }).then( (response) => { console.log(response.status())} )

//	await page.screenshot({path: 'tst.png', fullPage: true})

	res.info = await page.$$eval('span[class=text_exposed_link]>a',
		(spans) => spans.map( (span) => 
			span.href).map( (post_id) => 
				post_id.match( /(?<=posts\/)\d+/ )
				)
			)

console.log("------->" + res.info)	

	await browser.close()
	next()

}
*/

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

