const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.json())

const db = require('./app/models/index')
db.sequelize.sync();
// console.log(db);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
  
  // set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });