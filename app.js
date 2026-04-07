const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routes/posts') /* importing routing */


app.use('static', express.static('public'))
app.get('/', (req, res) => {
  res.send('Server del mio blog')
})
app.use('/posts', postsRouter)
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})