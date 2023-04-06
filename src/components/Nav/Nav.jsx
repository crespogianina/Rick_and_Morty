import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import style from './Nav.modules.css';

export default function Nav ({onSearch, searchRandom}) {
    return (
        <nav className={style.nav}>
            <SearchBar onSearch={onSearch} searchRandom={searchRandom}/>
            <button>
                <Link to='/about'>About</Link>
            </button>
            <button>
                <Link to='/home'>Home</Link>
            </button>
        </nav>
    )
}