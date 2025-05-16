const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Olá, Mundo!');
});

app.get('/api/produtos', (req, res) => {
    res.json([
        {
            id: 1,
            nome: "Camiseta Preta",
            preco: 29.90,
            estoque: 100
        },

        {
            id: 2,
            nome: "Calça Jeans",
            preco: 89.90,
            estoque: 50
        },

        {
            id: 3,
            nome: "Tênis Nike",
            preco: 199.90,
            estoque: 25
        },
        
        {
            id: 4,
            nome: "Mochila Adidas",
            preco: 149.90,
            estoque: 15
        }
    ]);
});


app.listen(3000, () => {
    console.log('Servidor rodando no http://localhost:3000')
})
