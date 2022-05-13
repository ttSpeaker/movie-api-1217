const express = require("express");

const genresController = require("../controllers/genres");

const router = express.Router();

//  /api/genre/
router.post("/", genresController.create);

// /api/genre/
router.get("/", genresController.findAll);

module.exports = router;
