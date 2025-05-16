const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('React App');
});

app.get('/about', (req, res) => {
    res.send('Simple React application with separate component files and CSS styling.');
});

app.get('/features', (req, res) => {
    res.send('Key Features');
});

app.get('/contact', (req, res) => {
    res.send('Email: info@example.com, Phone: (123) 456-7890');
});

app.listen(3000, () => {
    console.log('Servidor rodando no http://localhost:3000')
})