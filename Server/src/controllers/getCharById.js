const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      const char = {
        id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
        location: data.location
      }
      res
      .writeHead(200, {"Content-type": 'application/json'})
      .end(JSON.stringify(char))
    })
    .catch((error) => {
        res
        .writeHead(500, {"Content-type": 'text/plain'})
        .end('el personaje no se encontro' + error.message)
    })
};

module.exports =  getCharById ;
