const posts = require('../data/posts')


/* index */
function index (req,res) {
    let filteredPost = posts
    if (req.query.tags) {
        filteredPost = posts.filter(pizza => pizza.tags.includes(req.query.tags))
    }
    res.json(filteredPost) /* sending a json response of posts */

    /* example on postman: http://localhost:3000/posts/?tags=programmazione or http://localhost:3000/posts/ without filter */
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
/* example on postman: http://localhost:3000/posts/2 or http://localhost:3000/posts/8 to test 404 */
}

/* destroy */
    function destroy(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find((post, index) => index === id)
    if (!post) {
        res.status(404)
        return res.json({
            error: "Post non presente",
            message: "Post non trovato, riprova"
        })
    }
    posts.splice(posts.indexOf(post), 1)

    console.log(posts, "Elemento eliminato");
    

    res.sendStatus(204)

    /* to test on postman http://localhost:3000/posts/0 and rerun GET index without key to filter */
}


module.exports = {index, show, destroy}