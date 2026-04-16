require('dotenv').config();
module.exports = {
    testConcurrency: 1,
    apiKey: process.env.APPLITOOLS_API_KEY,
    batchName: "Todo App",
    browsers: [
        {
            width: 1024,
            height: 768,
            name: "chrome"
        }, {
            deviceName: "iPhone 12",
            screenOrientation: "portrait"
        }
    ]

}