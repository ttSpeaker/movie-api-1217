const Movie = require("../models/movie");

const createMovie = async (req, res, next) => {
  const title = req.body.title;

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

  // Creo la entidad
  let newMovie = new Movie(
    req.body.title,
    req.body.description,
    req.body.cast,
    req.body.director,
    req.body.genres
  );

  try {
    // Salvando la nueva entidad
    newMovie = await newMovie.save();
    res.send(newMovie);
  } catch (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

const findMovieByTitle = async (req, res, next) => {
  if (req.query.title === "") {
    res.statusCode = 400;
    res.send("Title cannot be empty");
  }
  const movie = await Movie.findByTitle(req.query.title);
  console.log("Response movie", movie);
  res.send(movie);
};

const titleIsValid = (title) => {
  return title !== "";
};

const movieAlreadyExists = async (title) => {
  const moviesByName = await Movie.findByTitle(title);
  return moviesByName.length > 0;
};

module.exports = {
  createMovie,
  findMovieByTitle,
};


