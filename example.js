const Nightmare = require('nightmare')
Nightmare({
    show: true,
    openDevTools: true,
    waitTimeout: 90000000 // increase the default timeout to test things
})
    .goto('https://news.ycombinator.com/')
    .evaluate(() => document.querySelector('.storylink').innerText)
    .end()
    .then(result => {
        console.log(`The top news story on Hacker News currently is:\n${result}`)
    })
    .catch(error => console.error(error))