//Defines the server settings and exports the server.js file to serve.
const express = require('express');
const router = require('./router.js');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
        methods: '*',
        origin: '*',
        optionsSuccessStatus: 200,
        headers: '*',
}));
app.use(router);

module.exports = app;