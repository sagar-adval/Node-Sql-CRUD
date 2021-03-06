 const tutorials = require("../controllers/tutorial.controller.js");
const router = require("express").Router();

router.post("/", tutorials.create);
  
    

module.exports = router