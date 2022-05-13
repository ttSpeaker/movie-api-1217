const movie = require("../models/movie");

const createMovie = async (req, res, next) => {
  const title = req.body.title;
  const genres = req.body.genres.length ? req.body.genres : [];

  if (!titleIsValid(title)) {
    res.statusCode = 400;
    res.send("Title cannot be empty");
    return;
  }

  if (await movieAlreadyExists(title)) {
    res.statusCode = 400;
    res.send("Movie with this title already exists");
    return;
  }

  try {
    newMovie = await movie.create(title, genres);
    res.send(newMovie);
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.send(err.message);
  }
};

const findMovieByTitle = async (req, res, next) => {
  if (req.query.title === "") {
    res.statusCode = 400;
    res.send("Title cannot be empty");
  }
  const movies = await movie.findByTitle(req.query.title);
  console.log("Response movie", movies);
  res.send(movies);
};

const titleIsValid = (title) => {
  return title !== "";
};

const movieAlreadyExists = async (title) => {
  const moviesByName = await movie.findByTitle(title);
  return moviesByName.length > 0;
};

module.exports = {
  createMovie,
  findMovieByTitle,
};
