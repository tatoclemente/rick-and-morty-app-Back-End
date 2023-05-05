import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error404/Error404";
import Form from "./components/Form/Form.jsx";
import Navesita from "./components/Navesita/navesita.jsx";
import Nave from "./assets/navesita.png";
import ROUTE from "./helpers/routes.helpers";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/favorites/Favorites";
import swal from 'sweetalert';
import axios from 'axios';
import Bienvenida from './components/Cards/Bienvenida';
function App() {
  const location = useLocation();

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  
  const login = (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/');
    });
  }

  const logout = () => {
    setAccess(false);
    navigate(ROUTE.LOGIN);
  };

  useEffect(() => {
    if(!access) navigate(ROUTE.LOGIN)
  },[]);

  const onSearch = (id) => {
    if(Number.isInteger(parseInt(id)) && id < 827){
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let repetidos = characters.find((char) => char.id === data.id);
          if (!repetidos) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            swal ("Ups! Lo siento!","ID repetido, prueba con otro ID", "warning",{buttons: true,});
          }
        }
      });
    } else{
      swal("Ups! Lo siento!", "Debe ingresar un ID válido", "warning")
    }
  };

  const randomSearch = () => {
    const idRandom = Math.floor(Math.random() * 827);
    onSearch(idRandom);
  };
  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== id);
    setCharacters(filtered);
  };

  return (
    <div className="App">
      {location.pathname !== ROUTE.LOGIN && (
        <NavBar
          setCharacters={setCharacters}
          onSearch={onSearch}
          randomSearch={randomSearch}
          logout={logout}
        />
      )}

      {location.pathname === ROUTE.LOGIN? <Navesita img={Nave} /> : null}

      <Routes>
        <Route path={ROUTE.LOGIN} 
          element={<Form login={login} />}      
        />
        <Route
          path='/'
          element={characters.length ?<Cards characters={characters} onClose={onClose} />:<Bienvenida/>}
        />
        <Route 
          path={ROUTE.FAVORITES} 
          element={<Favorites 
          onClose={onClose}/>}
        />
        <Route 
          path={ROUTE.ABOUT} 
          element={<About />} 
        />
        <Route 
          path={`${ROUTE.DETAIL}/:detailId`} 
          element={<Detail />} 
        />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
