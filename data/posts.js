const posts = [  /* our array of blog */
    {   
        id: 1,
        titolo: "Alla scoperta di React",
        contenuto: "React è una libreria JavaScript per costruire interfacce utente dinamiche...",
        immagine: "/static/images/react-guide.svg",
        tags: ["programmazione", "frontend", "javascript"]
    },
    {   
        id: 2,
        titolo: "I segreti del CSS Moderno",
        contenuto: "Grid e Flexbox hanno rivoluzionato il modo in cui progettiamo il layout web...",
        immagine: "/static/images/css-moderno.svg",
        tags: ["design", "web", "css"]
    },
    {   
        id: 3,
        titolo: "Guida a Node.js",
        contenuto: "Node.js permette di eseguire JavaScript lato server con alte prestazioni...",
        immagine: "/static/images/nodejs-back.svg",
        tags: ["backend", "javascript", "server"]
    },
    {   
        id: 4,
        titolo: "Ottimizzazione SEO per Web App",
        contenuto: "Migliorare la visibilità della tua applicazione sui motori di ricerca è fondamentale...",
        immagine: "/static/images/seo-tips.svg",
        tags: ["marketing", "seo", "web"]
    },
    {   id: 5, 
        titolo: "Introduzione a TypeScript",
        contenuto: "Aggiungere i tipi a JavaScript rende il codice più robusto e facile da manutenere...",
        immagine: "/static/images/typescript-intro.svg",
        tags: ["typescript", "programmazione", "frontend"]
    }
];

module.exports = posts