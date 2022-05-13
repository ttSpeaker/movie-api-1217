const prisma = require("../utils/client");

const create = async (title, genres) => {
  const genresRelationObj = [];

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    genresRelationObj.push({
      id: genre.id,
    });
  }

  try {
    const newMovie = await prisma.movie.create({
      data: {
        title: title,
        genres: {
          connect: genresRelationObj,
        },
      },
      include: {
        genres: true,
      },
    });
    return newMovie;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const findByTitle = async (title) => {
  try {
    const movies = await prisma.movie.findMany({
      include: {
        genres: true,
        reviews: true,
      },
      where: {
        title: title,
      },
    });
    return movies;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const getById = async (id) => {};

module.exports = { create, findByTitle, getById };
