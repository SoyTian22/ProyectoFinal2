const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const pokemonRouter = require('./routes/pokemon');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/pokemon' , pokemonRouter);

app.get('/', (req,res) =>{
    res.send('Servidor Funcionando')
})

app.listen(process.env.PORT || 4000, () => {
    console.log('servidor funcionando en 4000')
})