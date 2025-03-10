import React from 'react'
import '../Styles/Login.css'

function FormLogin() {
  return (
    <div>
      <label htmlFor="">Nombre</label>
      <input type="text"/>
      <label htmlFor="">Contraseña</label>
      <button>Iniciar</button>
    </div>
  )
}

export default FormLogin