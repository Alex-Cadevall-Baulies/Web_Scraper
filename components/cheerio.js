const cheerio = require('cheerio')
const getInfo = require('./fetch')

async function dataCheck() {
    try {
        const data = await getInfo()
        const $ = cheerio.load(data)
        const dataArray = []

        $(process.env.WHAT_TO_SCRAPE, data).each(function () {
            const element = $(this).text()
            //in case you also want hrefs
            const links = $(this).fins('a').attr('href')

            dataArray.push({
                element,
                links
            })
        })
        return dataArray
    } catch (err) {
        console.log(err)
    }
}

module.exports = dataCheck