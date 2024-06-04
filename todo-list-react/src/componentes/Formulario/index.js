import React from "react"
import './form.css';

const Formulario = ({tareas, i, estadoTarea, eliminar}) =>{
    return(
        <li className={tareas.completada? 'checked' : ''} onClick={()=> estadoTarea(i)}>
        {tareas.titulo}
        <span className="borrar" onClick={(e) => {e.stopPropagation(); eliminar(i);}}> x </span>
        </li>
      
    );
};

export default Formulario;