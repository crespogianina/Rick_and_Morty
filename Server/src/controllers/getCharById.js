const URL = "https://rickandmortyapi.com/api/character";
const axios = require('axios')

const getCharByID = async (req,res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`)
 
      if(!data.name) throw new Error(`Faltan datos del personaje con ID: ${id}`);

      const character = {
        id:data.id,
        name:data.name,
        species:data.species,
        gender:data.gender,
        image:data.image,
        status:data.status,
        origin:data.origin
      }
      return res.status(200).json(character);
      
      // return res.status(400).send('Not found')

  } catch (error) {
    return error.message.includes('ID')
    ? res.status(400).send(error.message)
    : res.status(500).send(error.response.data.error)
  }
}

module.exports = {
  getCharByID
}