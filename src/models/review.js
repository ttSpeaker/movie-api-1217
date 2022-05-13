const prisma = require("../utils/client");

const create = async (movieId, score, author, description) => {
  try {
    const review = await prisma.review.create({
      data: {
        score: score,
        author: author,
        description: description,
        movie: {
          connect: {
            id: movieId,
          },
        },
      },
    });
    return review;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

module.exports = { create };
