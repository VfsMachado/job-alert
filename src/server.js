const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//import da rota do email
const gmailRoutes = require('./routes/gmail');

//middleware
app.use(express.json());


//rotas principais

app.use('/gmail', gmailRoutes);

app.get('/', (req, res) => {
    res.send('Servidor rodando!');

});

app.listen(PORT, ()=> {

    console.log(`servidor iniciando em http://localhost:${PORT}`);
});
