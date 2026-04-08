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

router.put('/:title', postController.update)

/* destroy */

router.delete('/:id', postController.destroy)



module.exports = router