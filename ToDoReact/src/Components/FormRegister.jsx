import React from 'react'
import '../Styles/Register.css'

function FormRegister() {
  return (
    <div>
      <label htmlFor="">Nombre</label>
      <input type="text"/>
      <label htmlFor="">Contraseña</label>
      <input type="text" />
      <label htmlFor="">email</label>
      <input type="text"/>
      <button>Registrarse</button>
    </div>
  )
}

export default FormRegister