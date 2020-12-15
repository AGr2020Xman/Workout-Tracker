require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

const PWD = process.env.DBPWD;
const databaseUrl = `mongodb+srv://Andre2020:${encodeURIComponent(PWD)}@primarycluster.o092b.mongodb.net/fitnessTracker`;

mongoose.connect(process.env.MONGODB_URI || 
    databaseUrl, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
 });

 
// routes
app.use(require("./routes/html-routes"));
app.use(require("./routes/api-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});