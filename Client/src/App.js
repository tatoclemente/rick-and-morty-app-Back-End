import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "components/Cards/Cards.jsx";
import NavBar from "components/Nav/Nav.jsx";
import About from "components/About/About.jsx";
import Detail from "components/Detail/Detail.jsx";
import Error from "components/Error404/Error404";
import Form from "components/Form/Form.jsx";
import Navesita from "components/Navesita/navesita.jsx";
import Nave from "assets/navesita.png";
import ROUTE from "helpers/routes.helpers";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Favorites from "components/favorites/Favorites";
import swal from 'sweetalert';
import axios from 'axios';
import Bienvenida from 'components/Cards/Bienvenida';
import Loading from "components/Loading/Loading";
import NewAccount from "components/Form/NewAccount";


function App() {
  const location = useLocation();

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleLoading = () => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2500)
  }


  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
        setAccess("DATA", data);
        access && navigate('/');  
    } catch (error) {
      throw Error(error.message)
    }
  }

  const newAccount = async (userData)=>{
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login';
      const {data} = await axios.post(URL, {email, password})
      if(data.message === "Usuario creado correctamente"){
        swal("Bienvenido!", "Tu cuenta ha sido creada correctamente", "success")
        navigate(ROUTE.LOGIN)
      }
    } catch (error) {
      throw Error(error.message)
    }
  }

  useEffect(() => {
    if(!access && location.pathname !== ROUTE.REGISTER) {
      navigate(ROUTE.LOGIN)
    } 
  },[]);

  const logout = () => {
    setAccess(false);
    navigate(ROUTE.LOGIN);
  };

  const onSearch = async (id) => {
    try {
      if(Number.isInteger(parseInt(id)) && parseInt(id) < 827 && parseInt(id) > 0){
      const {data} = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
        let repetidos = characters.find((char) => char.id === data.id);
        if (!repetidos) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          swal ("Ups! Lo siento!","ID repetido, prueba con otro ID", "warning",{buttons: true,});
        }
      } else{
        swal("Ups! Lo siento!", "Debe ingresar un ID válido", "warning")
      }
    } catch (error) {
      throw Error(error.message)
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

  if(loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className="App">
      { location.pathname !== ROUTE.LOGIN && location.pathname !== ROUTE.REGISTER?
        <NavBar
          setCharacters={setCharacters}
          onSearch={onSearch}
          randomSearch={randomSearch}
          logout={logout}
        />
        : null
      }
      

      {location.pathname === ROUTE.LOGIN || location.pathname === ROUTE.REGISTER? <Navesita img={Nave} /> : null}

      <Routes>
        <Route path={ROUTE.LOGIN} 
          element={<Form login={login} loading={handleLoading} />}      
        />
        <Route path={ROUTE.REGISTER} 
          element={<NewAccount newAccount={newAccount} />}      
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
