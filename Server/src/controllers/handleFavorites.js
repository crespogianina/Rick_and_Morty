let myFavorites = [];
const {User, Favorite} = require('../DB_connection')

const postFav = async (req,res) => {
    try {
        const {id,name,status,species,gender,origin,image} = req.body;
        if(!id || !name || !image || !status) {
            return res.status(404).json({message:'the require information is missing'})
        }

        const character = {id,name,status,gender,species,origin,image}
        const char= await Favorite.create(character)

        const favorites = await Favorite.findAll()

        return res.status(200).json(favorites);

    } catch (error) {
        res.status(404).json({message: error})
    }
    
}

const deleteFav = async (req,res) => {

    try {
        const {id} = req.params;

        if(!id) return res.status(404).json({message: 'id not found'});

        const char = await Favorite.findByPk(id)
        if(char) {
            await Favorite.destroy({
                where: {id}
            })
        }
        const favorites = await Favorite.findAll()

        return res.status(200).json(favorites);


    } catch (error) {
        res.status(404).json({message: error})
        
    }
}

module.exports= {
    postFav,
    deleteFav
}
