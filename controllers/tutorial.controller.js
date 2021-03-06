const db = require('../models');
const tutorialService = require('../services/tutorial.service')

const Tutorial = db.tutorial;

const Op = db.Sequelize.Op;

const create  = async (req, res)  => {
    if (!req.body.title) {
        return res.status(400).send({
          message: "Title can not be empty!"
        });
      }
      const createdTut = await tutorialService.createTutorial(req.body);

      if(createdTut)
      {
        return res.status(200).send(createdTut)
      }

      return res.send(500).send('Could not create the tutorial');
}

module.exports = {create};