const express = require('express');
const app = express();
const mongoose = require('mongoose');
const usersRoutes = require('./router/user');
const book = require('./router/book');
const fileUpload = require('express-fileupload');
const auth =  require('./middlweare/auth');




app.use(fileUpload());



app.use(express.static('public'));

mongoose.connect('mongodb://murtaza:ali12345@ds137540.mlab.com:37540/book_store', { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('\x1b[36m%s\x1b[0m', 'mongo has been connected...');
  });

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

  app.use(express.json());
  app.use('/api/user', usersRoutes);
  app.use('/api/books', book);

app.get('/', (req, res) => {
   
    res.send("hello");
  });


app.listen("5000", () => {
    console.log(`Running on port 5000`);
  });
  