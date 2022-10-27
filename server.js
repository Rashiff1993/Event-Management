const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const eventRoutes = require('./routes/events');
const dotenv = require('dotenv/config');
const bodyParser = require('body-parser');

mongoose.connect(process.env.DATABASE_URL,
{useNewUrlParser: true, useUnifiedTopology: true}).then(
()=>{
    console.log('DB Connected.......');
}).catch(err => {
    console.error('db error', err);
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/users',userRoutes);
app.use('/events',eventRoutes);

app.listen(port,() => {console.log(`Server created Successfully on port ${port}`);});

