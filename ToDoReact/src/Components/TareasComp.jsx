import React, { useState, } from 'react';
import '../Styles/TareasComp.css';
import llamadosUsuarios from '../Services/llamadosUsuarios';

function TareasComp() {
  
  const [IngresarTarea,  SetIngresarTarea] = useState()
  const [CargarTarea,  SetCargar] = useState()
  const [EditarTarea,  SetEditar] = useState()
  const [EliminarTarea,  SetEliminar] = useState()
  const [TareasListas, SetImprimir] = useState()

  function NuevaTarea(evento) {
    SetIngresarTarea(evento.target.value)
   }

   function Cargar(evento) {
    SetCargar(evento.target.value)
   }

   function Editar(evento) {
    SetEditar(evento.target.value)
   }

   function Eliminar(evento) {
    SetEliminar(evento.target.value)
   }

   function ImprimirTarea(evento) {
    SetImprimir(evento.target.value)
   }

   

return (
  <div> {/*Este es un comentario. Abre el div principal */}
    <h1>Tareas por hacer</h1>
      <div className="container">
        <div> {/*para efectos de estilos: Abre Container para el boton y el cuadro de texto para agregar la tarea */}
          <input value={IngresarTarea} onChange={NuevaTarea} type="text" placeholder="Ingresar tarea" /><br />
          <button value={CargarTarea} onClick={Cargar} >Cargar</button>
        </div> {/*Cierra Container para el boton y el cuadro de texto para agregar la tarea */}
        <div> {/*para efectos de estilos: Abre Container para tareas completas */}
          <p>Tareas completadas</p>
          <input value={TareasListas} onChange={ImprimirTarea} className='inpTareasListas'  type="text" />
        </div>  {/*Cierra Container para tareas completas */}
      </div> {/*Cierra Container */}
      <div></div>
      <button value={EditarTarea} onClick={Editar} >Editar</button>
      <button value={EliminarTarea} onClick={Eliminar} >Eliminar</button>
  </div>    
    // Cierra el div principal
  );
};

export default TareasComp
