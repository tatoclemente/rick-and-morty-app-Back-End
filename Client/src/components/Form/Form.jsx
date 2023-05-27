import React, { useState } from "react"
import Style from './Form.module.css'
import LogoForm from 'assets/logoForm.png'
import validation from '../Functions/validation.js'
import ROUTES from 'helpers/routes.helpers'
import { Link } from "react-router-dom"

const Form = ({ login, loading }) => {

 
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setUserData({...userData, [name]:value})
    setErrors(
      validation({
        ...userData, 
        [name] : value,
      })
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    loading()
    login(userData)
  }

  return (
    <div>

      <div className={Style.formWrapper}>
        <form className={Style.form}>
          <img src={LogoForm} alt="rick y morty" />
          <label htmlFor="email">Username:</label>
            <input 
              type="text" 
              name="email" 
              value={userData.email}
              placeholder='Escribe tu correo electrónico...'
              onChange={handleChange}
              className={errors.email && Style.warning}
            />
            {errors.email ? <p className={Style.danger}>{errors.email}</p> : null}

          <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              name="password"
              value={userData.password}
              placeholder='Escribe tu contraseña...'
              onChange={handleChange}
              className={errors.password && Style.warning}
            />
            {errors.password ? <p className={Style.danger}>{errors.password}</p> : null}    
          <button onClick={handleSubmit}>Login</button>
          <p className={Style.lastLink}>No tienes cuenta? <Link to={ROUTES.REGISTER} className={Style.link}>Registrate Aquí</Link></p>
        </form>
      </div>
    </div> 
  )
}
export default Form