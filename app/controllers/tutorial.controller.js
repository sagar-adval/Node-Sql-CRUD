const db = require('../models');

const Tutorial = db.tutorials;

const Op = db.Sequelize.Op;

const create  = async (req, res)  => {
    if (!req.body.title) {
        return res.status(400).send({
          message: "Title can not be empty!"
        });
      }

      const tutorial = req.body;

      const createdTut = await Tutorial.create(tutorial);

      if(createdTut)
      {
        return res.status(200).send(createdTut)
      }

      return res.send(500).send('Could not create the tutorial');
}

module.exports = {create};