import Card from "../Card/Card"
import { connect } from "react-redux"
import style from './Favorites.module.css'
import { useDispatch } from "react-redux"
import {filterCards, orderCards} from '../../redux/actions'
import { useState } from "react"

const Favorites = ({myFavorites}) => {

    const [aux,setAux] = useState(false)

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }
    
    return (
        <div>
            <div className={style.search}>
            <select onChange={handleOrder}>
                <option value='A'>Ascendente</option>
                <option value='D'>Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>unknown</option>
            </select>
            </div>
            
            <div className={style.conteiner}>
            {myFavorites && myFavorites.map(({status,id,name,species,gender,origin,image}) => {
                return (
                    <Card id={id}
                    key={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    origin={origin}
                    image={image}
                    />
                    )
                })}         
                </div>
        </div>
    ) 
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)