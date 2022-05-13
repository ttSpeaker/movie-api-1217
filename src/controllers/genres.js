const genres = require("../models/genre");

const create = async (req, res, next) => {
  try {
    const name = req.body.name;
    const newGenre = await genres.create(name);
    res.send(newGenre);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.send(error.message);
  }
};

const findAll = async (req, res, next) => {
  try {
    const allGenres = await genres.findAll();
    res.send(allGenres);
  } catch (error) {
    res.statusCode = 500;
    res.send(error);
  }
};

module.exports = { create, findAll };
