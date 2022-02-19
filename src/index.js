/** @format */

const express = require('express');
const { router } = require('./routes');

const app = express();

app.use(express.json());

app.use(router);

const port = 3001;
app.listen(port, () => console.log(`Server running at port ${port}`));
