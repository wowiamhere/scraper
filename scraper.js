// for puppeteer

const pup = require('puppeteer')

async function getData(req, res, next){

	const browser = await pup.launch()
	const page = await browser.newPage()

	await page.goto('https://www.facebook.com/pg/centralcastinglosangeles/posts/', 
		{ waitUntil: 'load' }).then( (response) => { console.log(response.status())} )

//	await page.screenshot({path: 'tst.png', fullPage: true})


//		select the element and extract the post id
	res.post_ids = await page.$$eval('span[class=text_exposed_link]>a',
		(spans) => spans.map( (span) => 
			span.href).map( (post_id) => 
				post_id.match( /(?<=posts\/)\d+/ )
				)
			)

	await browser.close()
	next()

}

module.exports = getData