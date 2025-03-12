import React from 'react'
import '../Styles/Login.css'

function FormLogin() {
  function Iniciar(){

  

  }
  return (
    <div>
      <label htmlFor="">Nombre</label>
      <input type="text"/><br /><br />
      <label htmlFor="">Contraseña</label>
      <input type="text" /><br /><br />
      <button onClick={Iniciar} className='btnIniciar'>Iniciar</button>
    </div>
    )
}


export default FormLogin