const express = require('express')
const router = express.Router()

const posts = [  /* our array of blog */
    {
        titolo: "Alla scoperta di React",
        contenuto: "React è una libreria JavaScript per costruire interfacce utente dinamiche...",
        immagine: "/static/images/react-guide.svg",
        tags: ["programmazione", "frontend", "javascript"]
    },
    {
        titolo: "I segreti del CSS Moderno",
        contenuto: "Grid e Flexbox hanno rivoluzionato il modo in cui progettiamo il layout web...",
        immagine: "/static/images/css-moderno.svg",
        tags: ["design", "web", "css"]
    },
    {
        titolo: "Guida a Node.js",
        contenuto: "Node.js permette di eseguire JavaScript lato server con alte prestazioni...",
        immagine: "/static/images/nodejs-back.svg",
        tags: ["backend", "javascript", "server"]
    },
    {
        titolo: "Ottimizzazione SEO per Web App",
        contenuto: "Migliorare la visibilità della tua applicazione sui motori di ricerca è fondamentale...",
        immagine: "/static/images/seo-tips.svg",
        tags: ["marketing", "seo", "web"]
    },
    {
        titolo: "Introduzione a TypeScript",
        contenuto: "Aggiungere i tipi a JavaScript rende il codice più robusto e facile da manutenere...",
        immagine: "/static/images/typescript-intro.svg",
        tags: ["typescript", "programmazione", "frontend"]
    }
];

/* index */

router.get('/', (req, res) => {
    res.json(posts) /* sending a json response of posts */
})

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