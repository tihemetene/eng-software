const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const UserRouter = require('./routes/user.router');
const MedicoRouter = require('./routes/medico.router');
const RecepRouter = require('./routes/recep.router');

require('dotenv').config();

const {HTTP_PORT, MONGO_URL} = process.env;


mongoose.connect(MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) =>{
  res.json({message: "teste"})
})

app.use('/api', UserRouter); 
app.use('/api', MedicoRouter); 
app.use('/api', RecepRouter); 

app.listen(HTTP_PORT, () => {
  console.log(`Rodando na porta ${HTTP_PORT}`);
})