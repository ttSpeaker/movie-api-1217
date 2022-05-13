const prisma = require("../utils/client");

const create = async (name) => {
  try {
    const newGenre = await prisma.genre.create({
      data: {
        name: name,
      },
    });
    return newGenre;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const findAll = async () => {
  try {
    const genres = await prisma.genre.findMany();
    return genres;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { create, findAll };
