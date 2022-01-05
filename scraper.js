// for puppeteer
const pup = require('puppeteer')

async function getData(){

	const browser = await pup.launch()
	const page = await browser.newPage()

	await page.goto('https://www.facebook.com/pg/centralcastinglosangeles/posts/', 
		{ waitUntil: 'load' }).then( (response) => { console.log(response.status())} )

	await page.screenshot({path: 'tst.png', fullPage: true})

	const info = await page.$$eval('a[class=see_more_link]', 
		(spans) => spans.map( (span) => 
			span.href).map( (post_id) => 
				post_id.match(/\d+$/)
				)
			)

console.log("------->" + info)	

	await browser.close()
}

getData()