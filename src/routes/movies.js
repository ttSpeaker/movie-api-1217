const express = require("express");

const moviesController = require("../controllers/movies");

const router = express.Router();

//  /api/movies/
router.post("/", moviesController.createMovie);

// /api/movies/search ?title=avatar&reviews=true
router.get("/search", moviesController.findMovieByTitle);

// /api/movies/
router.get("/", () => {
  console.log("get all movies");
});

// /api/movies/rank
router.get("/rank", () => {
  console.log("Get ranking");
});

module.exports = router;
