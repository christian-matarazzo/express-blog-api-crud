const express = require('express')
const router = express.Router()
const posts = require('../data/posts')
const postController = require('../controllers/postController')

/* index */

router.get('/', postController.index)

/* show */

router.get('/:id', (req, res) => {
const id = parseInt(req.params.id)
const post = posts.find((post,index) => index === id)
if (post) {
    res.json(post)
} else {
    res.status(404).json({ error: 'Post non trovato' }) /* response if the post is not found */
}
})

/* store */

router.post('/', (req, res) => {
    res.send('Creazione di un nuovo post ') /* response of a post creation */
})

/* update */

router.put('/:id', (req,res) => {
    res.send('Aggiornamento del post con id: ' +req.params.id) /* response of post update */
})

/* destroy */

router.delete('/:id', (req,res) => {
    res.send('Cancellazione del post con id: ' + req.params.id) /* response of post deletion */
})

module.exports = router