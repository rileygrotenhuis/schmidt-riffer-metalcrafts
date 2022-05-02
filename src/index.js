require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.json('Schmidt-Riffer Metalcrafts');
});

app.use(require('./routes/index.routes'));

app.listen(PORT, () => {
    console.log(`Schdmit-Riffer Metalcrafts is running at http://localhost:${PORT}`);
});