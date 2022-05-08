const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const connectDb = require('./configs/db');
const { errorHandler } = require('./middlewares/errorMiddleware');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

connectDb();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/goals', require('./routes/goalRoutes'));
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server started on port ${port}`.blue.underline)
);
