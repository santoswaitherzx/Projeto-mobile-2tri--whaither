const express = require('express');
const app = express();
const PORT = 3000;

app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nome: 'Ana Silva', email: 'ana@escola.com' },
        { id: 2, nome: 'Carlos Souza', email: 'carlos@escola.com' }
    ]);
});

app.get('/tarefas', (req, res) => {
    res.json([
        { id: 1, titulo: 'Trabalho de História', prioridade: 'Alta' },
        { id: 2, titulo: 'Exercícios de Matemática', prioridade: 'Média' }
    ]);
});

app.get('/reservas', (req, res) => {
    res.json([
        { id: 1, espaco: 'Laboratório de Informática', horario: '14:00' },
        { id: 2, espaco: 'Quadra Poliesportiva', horario: '16:00' }
    ]);
});

app.get('/status', (req, res) => {
    res.send('Sistema ativo e operacional.');
});

app.get('/turmas', (req, res) => {
    res.json(['2º Ano A', '2º Ano B', '3º Ano C']);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost8081:${PORT}`);
});