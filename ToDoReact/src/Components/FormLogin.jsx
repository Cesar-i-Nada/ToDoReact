import React, { useState, useEffect } from 'react'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import llamadosUsuarios from '../Services/llamadosUsuarios' 

function FormLogin() {

  const [nombreUsuario,  SetNombreUsuario] = useState()
  const [passwordUsuario, SetPasswordUsuario] = useState()
  const [usuarios, SetUsuarios] = useState()
  const navigate = useNavigate()

  useEffect (() => {

    async function fetchDataUsers() {

      const datos = await llamadosUsuarios.getUsuarios()
      SetUsuarios(datos)
    };

    fetchDataUsers();
  }, []);

   function nombre(evento) {
    SetNombreUsuario(evento.target.value)
   }
   
   function password(evento) {
     SetPasswordUsuario(evento.target.value)
   }

   function Iniciar() { 

    const registrado = usuarios.filter(usuario => usuario.nombre === nombreUsuario && usuario.password === passwordUsuario)
   }

if (registrado.lenght === 0) {

} else{
  navigate('/TareasComp')
}


return (
  <div>
      <label >Nombre</label>
      <input value={nombreUsuario} onChange={nombre} type="text"/><br /><br />
      <label >Contraseña</label>
      <input value={passwordUsuario} onChange={password} type="password" /><br /><br />
      <button onClick={Iniciar} className='btnIniciar'>Iniciar</button>
      <p>¿Aún no tienes cuenta? <Link to = "/Register">Registrarse</Link></p>
    </div>
    );
  };
  
  llamadosUsuarios.getUsuarios(nombreUsuario, passwordUsuario)

export default FormLogin