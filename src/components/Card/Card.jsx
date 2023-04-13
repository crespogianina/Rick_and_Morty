import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';


function Card({id,name,status,species,gender,origin,image,onClose,remove_Fav,add_Fav,myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         remove_Fav(id)
      }else {
         setIsFav(true)
         add_Fav({id,name,status,species,gender,origin,image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id) {
            setIsFav(true)
         }
      })
   },[myFavorites]);


   return (
      <div className={style.conteiner}>
         <button onClick={handleFavorite}> {isFav ? '❤️' : '🤍'} </button>
         <button className={style.button} onClick={() => onClose(id)}>X</button>
         <img src={image} alt='{name}' />
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
        <div className={style.text}>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
        </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites:state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
  return{
   add_Fav: (character) => { dispatch( addFav(character) ) },
   remove_Fav: (id) => {dispatch( removeFav(id) ) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)