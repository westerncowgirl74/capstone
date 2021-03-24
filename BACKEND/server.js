const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;



app.use(cors());
app.use(bodyParser.json());

// Used to connect to the Mongo DB database
mongoose.connect('mongodb://127.0.0.1:27017/mygames',{useNewUrlParser: true});
const connection= mongoose


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));