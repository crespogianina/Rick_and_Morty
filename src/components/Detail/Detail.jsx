import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'f8697bf85503.9eef98eb91d3370ab8f1';
   

export default function Detail () {
    const id = useParams()
    const [character,setCharacter] = useState({})

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then((data ) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
          {
            // character && 
            // <div>
            //       <h1>{character.name}</h1>
            //       <h2>{character.status}</h2>
            //       <h2>{character.origin.name}</h2>
            //       <h2>{character.gender}</h2>
            // </div>
//-----------------------------------------------------------------
// character ? <h2>{character.name}</h2> : null
//-----------------------------------------------------------------
            //   <h2>{character?.name}</h2> condicional chaining
            <h2>{character?.name}</h2>
          }
        </div>
    )
}