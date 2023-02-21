async function getInfo() {
    try {
        const response = await fetch(process.env.WEBSITE_TO_SCRAPE)
        //Using .text in case data is not json
        const data = await response.text()
        return data
    } catch (err) {
        console.log(err)
    }

}

module.exports = getInfo