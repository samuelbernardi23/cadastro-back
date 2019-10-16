const express = require('express');
const app = express();

const routes = require('./src/models/routes');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect('mongodb+srv://samuel:samuel@cluster0-nvvrf.mongodb.net/igreja?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors());

app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 3333);