const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Bem-vindo ao Portal Escolar Emílio de Menezes!');
});

app.get('/sobre', (req, res) => {
    res.send('Sobre o Projeto: Uma plataforma desenvolvida para organizar, melhorar e aprimorar o ambiente escolar, facilitando avisos e reclamações.');
});

app.get('/equipe', (req, res) => {
    res.send('Equipe: Desenvolvido pelo grupo de tecnologia do segundo ano para o Projeto Integrado.');
});

app.get('/contato', (req, res) => {
    res.send('Contato: Para falar com a coordenação, utilize o formulário de atendimento na página principal ou envie um e-mail oficial.');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});