const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('../database/model');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Cannot connect to MongoDB', err);
    process.exit();
});

require('../routes/routes')(app);
app.use(express.static(path.join(__dirname, '../front/dist')));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
