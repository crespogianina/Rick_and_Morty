import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import{Routes,Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';


function App() {
   const {pathname} = useLocation()
   const API_KEY = 'f8697bf85503.9eef98eb91d3370ab8f1';
   const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
   const navigate = useNavigate();

   const EMAIL = 'crespogianina98@gmail.com';
   const PASSWORD = 'password3';
   
   const [characters,setCharacters] = useState([])
   const [access, setAccess] = useState(false);
   
   
   const onSearch = (id) => {
      if (characters.length && characters.find((char) => char.id === id)) {
         alert('Ese personaje ya se encuentra en el Home')
      }else {
         axios(`${URL_BASE}/${id}?key=${API_KEY}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         })

      }
   }

   const onClose = (id) => {
      setCharacters(characters.filter((character) => character.id !== id))

   }
  
   //* EJEMPLO MIO DE COMO HACER CON LOCATION
   // const HandleLocation = () => {
   //    if(location.pathname !== '/') return <Nav onSearch={onSearch} />;
   //    return null;
   // }

   const login = (userData) => {
      if(EMAIL === userData.email && PASSWORD === userData.password) {
         setAccess(true);
         navigate('/home')
      }
      else{
         alert('Ocurrió un error')
      }
   }

   useEffect(() => { 
      !access && navigate('/')
   },[access])

   const searchRandom = () => {
      let id = Math.floor(Math.random() * 800);

      if (characters.length && characters.find((char) => char.id === id)) {
         alert('Ese personaje ya se encuentra en el Home')
      }else {
         axios(`${URL_BASE}/${id}?key=${API_KEY}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         })

      }
   }

   return (
      <div className='App'>
         {/* {HandleLocation()} */}
         {pathname !== '/' && <Nav onSearch={onSearch} searchRandom={searchRandom} />}
         <Routes>
            <Route path='/' element={<Form login={login}/>}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
