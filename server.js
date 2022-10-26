'use strict';
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

function start(port) {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
};

module.exports= {start};