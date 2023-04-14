import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'f8697bf85503.9eef98eb91d3370ab8f1';
   

export default function Detail () {
    const {id} = useParams()
    const [character,setCharacter] = useState({})

    useEffect(() => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);

    return (
        <div className={style.h2}>
         {
            character.name ?
            (<>
            <div className={style.text}>
            <h2>Name: {character?.name}</h2>
            <h2>Status: {character?.status}</h2>
            <h2>Gender: {character?.gender}</h2>
            <h2>Origin: {character?.origin?.name}</h2>
            </div>
            <img className={style.imageChar} src={character?.image} alt={character.name}/>
            </>) 
            : <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" alt="Loading" id={style.loading}/>
         }
         
        </div>
    )
}



      

            {/* // character && 
            // <div>
            //       <h1>{character.name}</h1>
            //       <h2>{character.status}</h2>
            //       <h2>{character.origin.name}</h2>
            //       <h2>{character.gender}</h2>
            // </div>
//-----------------------------------------------------------------
// character ? <h2>{character.name}</h2> : null
//-----------------------------------------------------------------
            //   <h2>{character?.name}</h2> condicional chaining */}