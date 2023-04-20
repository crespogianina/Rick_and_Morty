import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';
import style from './SearchBar.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { changeAccess } from '../../redux/actions';


function Nav ({onSearch, searchRandom}) {
    const dispatch = useDispatch();
    const state= useSelector(state => state.access)
    

    const handleAcces = () => {
        dispatch(changeAccess())
    }

    return (
        <nav className={style.navConteiner}>
            <NavLink to='/'><button className={style.logOut} onClick={handleAcces} >LOG OUT</button></NavLink>
            <div className={style.links}>
            <NavLink to='/about' ><button className={style.button}>About</button></NavLink>
            <NavLink to='/home'><button className={style.button} >Home</button></NavLink>
            <NavLink to='/favorites'><button className={style.button} >Favorites</button></NavLink>
            </div>
            <div className={style.SearchBar}>
            
            <SearchBar onSearch={onSearch} searchRandom={searchRandom} />  
            </div>
        
        </nav>
    )
}

export default Nav