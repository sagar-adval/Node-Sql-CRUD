const db = require('../models');

const Tutorial = db.tutorial;

const createTutorial = async (tutorialData) => {
    return await Tutorial.create(tutorialData);
}

module.exports = {createTutorial};