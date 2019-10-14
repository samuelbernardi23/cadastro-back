const app = require('./src/config/custom-express');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect('mongodb+srv://samuel:samuel@cluster0-nvvrf.mongodb.net/igreja?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.listen(process.env.PORT || 3000);