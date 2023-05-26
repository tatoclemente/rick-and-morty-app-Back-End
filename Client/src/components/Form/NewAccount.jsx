import React, { useState } from "react"
import Style from './NewAccount.module.css'
import LogoForm from 'assets/logoForm.png'
import validation from '../Functions/validation.js'

const NewAccount = ({ newAccount }) => {

 
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    password_validate: '',
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    password_validate: '',
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
    newAccount(userData)
  }

  return (
    <div>

      <div className={Style.formWrapper}>
        <form className={Style.form}>
            <h2>Registrate aquí</h2>
          <img src={LogoForm} alt="rick y morty" />
          <label htmlFor="email">E-Mail:</label>
            <input 
              type="text" 
              name="email" 
              value={userData.email}
              placeholder='Escribe tu mejor correo electrónico...'
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

          <label htmlFor="password">Repite tu Password:</label>
            <input 
              type="password" 
              name="password_validate"
              value={userData.password_validate}
              placeholder='Compurueba tu contraseña...'
              onChange={handleChange}
              className={errors.password && Style.warning}
            />
            {errors.password ? <p className={Style.danger}>{errors.password}</p> : null}


          <button onClick={handleSubmit}>Create Account</button>
        </form>
      </div>
    </div>
    
    
  )
}
export default NewAccount;