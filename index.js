const express = require('express');
const mongoose = require('mongoose')
const { resolve } = require('path');
require('dotenv').config();

const app = express();
const port = 3010;

app.use(express.static('static'));

async function connectDatabase(){
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log('database connected')

  }catch(err){
    console.log(err);
  }
}
connectDatabase();


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
