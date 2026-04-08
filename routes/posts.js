const express = require('express')
const router = express.Router()
const posts = require('../data/posts')
const postController = require('../controllers/postController')

/* index */

router.get('/', postController.index)

/* show */

router.get('/:id', postController.show)

/* store, create */

router.post('/', postController.create)

/* update */

router.put('/:id', (req, res) => {
    res.send('Aggiornamento del post con id: ' + req.params.id) /* response of post update */
})

/* destroy */

router.delete('/:id', postController.destroy)



module.exports = router