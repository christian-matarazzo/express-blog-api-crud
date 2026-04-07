const express = require('express')
const router = express.Router()
const posts = require('../data/posts')
const postController = require('../controllers/postController')

/* index */

router.get('/', postController.index)

/* show */

router.get('/:id', postController.show)

/* store */

router.post('/', (req, res) => {
    res.send('Creazione di un nuovo post ') /* response of a post creation */
})

/* update */

router.put('/:id', (req, res) => {
    res.send('Aggiornamento del post con id: ' + req.params.id) /* response of post update */
})

/* destroy */

router.delete('/:id', postController.destroy) 



module.exports = router