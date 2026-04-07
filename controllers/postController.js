const posts = require('../data/posts')


/* index */
function index (req,res) {
    let filteredPost = posts
    if (req.query.tags) {
        filteredPost = posts.filter(pizza => pizza.tags.includes(req.query.tags))
    }
    res.json(filteredPost) /* sending a json response of posts */

    /* example on postman: http://localhost:3000/posts/?tags=programmazione */
}


/* show */
function show (req,res) {
const id = parseInt(req.params.id)
const post = posts.find((post,index) => index === id)
if(!post) {
    res.status(404)
    return res.json({
        error: "Post non presente",
        message:"Post non trovato, riprova"
    })
}
res.json(post)
}




module.exports = {index, show}