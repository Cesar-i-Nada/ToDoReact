import React from 'react'
import '../Styles/Register.css'

function FormRegister() {
  function Registrar(){
    
  }
  return (
    <div>
      <label htmlFor="">Nombre</label>
      <input type="text"/><br /><br />
      <label htmlFor="">Contraseña</label>
      <input type="text" /><br /><br />
      <label htmlFor="">email</label>
      <input type="text"/><br /><br />
      <button onClick={Registrar} className='btnRegistrar'>Registrarse</button>
    </div>
  )
}

export default FormRegister