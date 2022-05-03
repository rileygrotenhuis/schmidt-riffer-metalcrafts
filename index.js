require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const next = require('./next');

const start = async (port) => {
    await next(app);

    app.use('/api', require('./src/routes/index.routes'));

    app.listen(port);
}

start(PORT);