const express = require ('express');
require("dotenv").config();
const connectDB = require("./config/db");
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express(); 
connectDB();
const port = 4000;


app.use(express.json());
app.use(cors());
app.use('/books',router); // localhost :4000/books



app.listen(port, (err) => {
    err ? console.log(err) : console.log(`running on port ${port}`);
  });
  