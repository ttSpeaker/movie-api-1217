const review = require("../models/review");

const createReview = async (req, res, next) => {
  try {
    const movieId = req.body.movie_id;
    const score = req.body.score;
    const author = req.body.author;
    const description = req.body.description;

    if (!isValidInputData(movieId, score, author, description)) {
      res.statusCode = 400;
      res.send("Invalid data for review");
      return;
    }

    const newReview = await review.create(movieId, score, author, description);
    res.send(newReview);
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.send(err.message);
  }
};

const isValidInputData = (movieId, score, author, description) => {
  return (
    movieId &&
    score >= 0 &&
    score <= 5 &&
    author.length > 0 &&
    description.length > 0
  );
};

module.exports = { createReview };
