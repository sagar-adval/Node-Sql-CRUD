const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.json())

const db = require('./app/models/index')
// db.sequelize.sync();
// console.log(db);


db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

  const tutorialController = require("./app/routes/tutorial.routes");

  app.use("/api/tutorials", tutorialController);
  
  // set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });