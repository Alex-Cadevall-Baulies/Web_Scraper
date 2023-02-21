const cheerio = require('cheerio')
const getInfo = require('./fetch')

async function dataCheck() {
    const data = await getInfo()
    const $ = cheerio.load(data)

    $(process.env.WHAT_TO_SCRAPE, data).each(function() {
        const element = $(this).text()
        //in case you also want hrefs
        const links = $(this).fins('a').attr('href')
    })

}

module.exports = dataCheck
