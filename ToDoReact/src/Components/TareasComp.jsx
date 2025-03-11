import React from 'react'
import '../Styles/TareasComp.css'

function TareasComp() {
  return (
    <div>
        <h1>Tareas por hacer</h1>
        <div className="primera">
          <div>
            <input type="text" placeholder="Ingresar tarea" /><br />
            <button>Agregar</button>
          </div>
          <div>
            <p>Tareas completadas</p>
            <input className='inpTareasComp'  type="text" />
          </div>  
    </div>
<input type="text" />
    </div>
  )
}

export default TareasComp
