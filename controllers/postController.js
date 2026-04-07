const posts = require('../data/posts')

function index (req,res) {
    let filteredPost = posts
    if (req.query.tags) {
        filteredPost = posts.filter(pizza => pizza.tags.includes(req.query.tags))
    }
    res.json(filteredPost) /* sending a json response of posts */

    /* example on postman: http://localhost:3000/posts/?tags=programmazione */
}


module.exports = {index}