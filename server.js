const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.json())

const db = require('./models/index')
// db.sequelize.sync();
// console.log(db);


db.sequelize.sync().then(() => {
  console.log("Connected to Database");
});

app.get("/", (req, res) => {
    res.json({ message: "Testing!" });
  });

  const tutorialController = require("./routes/tutorial.routes");

  app.use("/api/tutorials", tutorialController);
  
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});