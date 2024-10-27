// server.js
const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

// Stel Nunjucks in als template-engine en wijs de 'views' map aan
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// Standaard route
app.get('/', (req, res) => {
    res.render('index.njk', { message: 'Hello, World!' });
});

// Start de server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
