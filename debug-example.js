const Nightmare = require('nightmare')
const HACKER_NEWS_URL = 'https://news.ycombinator.com/'
const STORY_SELECTOR = '.storylink'

Nightmare({
    show: true,
    openDevTools: true,
    waitTimeout: 90000000 // increase the default timeout to test things
})
    .goto(HACKER_NEWS_URL)
    .evaluate(storySelector => { // storySelector is passed in as the second paramater
        var storyElements = [].slice.call(document.querySelectorAll(storySelector))
        var storyTitles = storyElements.map(storyElement => storyElement.innerText)
        debugger // this statement sets a break point that will show immediatley with openDevTools set to true
        return storyTitles
    }, STORY_SELECTOR) // storySelector is passed in here for the browser context evaluate runs in
    .end()
    .then(result => console.log(result))
    .catch(error => console.error(error))