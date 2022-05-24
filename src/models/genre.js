const prisma = require("../utils/client");
const getCollection = require("../utils/mongoclient").getCollection;

const create = async (name) => {
  try {
    const genresCollection = getCollection("nuevaCollection");
    const newGenre = await genresCollection.insertOne({
      hola: "hola",
      lista: ["hola", 1234, { bla: "bla" }],
    });

    // const newGenre = await prisma.genre.create({
    //   data: {
    //     name: name,
    //   },
    // });
    return newGenre;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const findAll = async () => {
  try {
    //   const genres = await prisma.genre.findMany();

    const genresCollection = getCollection("Genre");
    const genres = await genresCollection.find().toArray();
    return genres;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { create, findAll };
