const Movie = require("../models/movie");
const Review = require("../models/review");

const createReview = async (req, res, next) => {
  const movieId = req.body.movie_id;
  console.log(movieId);
  const score = req.body.score;
  const author = req.body.author;
  const content = req.body.content;

  if (!isValidInputData(movieId, score, author, content)) {
    res.statusCode = 400;
    res.send("Invalid data for review");
    return;
  }

  const movie = await Movie.getById(movieId);
  console.log("movie found", movie);
  if (movie === null) {
    res.statusCode = 400;
    res.send("Cant find movie with id " + movieId);
    return;
  }
  const newReview = new Review(score, author, content);
  movie.reviews.push(newReview);
  movie.save();

  res.send(newReview);
};

const isValidInputData = (movieId, score, author, content) => {
  return (
    movieId &&
    movieId.length > 0 &&
    score >= 0 &&
    score <= 5 &&
    author.length > 0 &&
    content.length > 0
  );
};

module.exports = { createReview };
