import React from "react";
import Formulario from "../Formulario/index.js";
import './list_tareas.css'
const ListadoTareas = ({ tareas, estadoTarea, eliminar }) => {
    return (
        <ul id="UL">
            {tareas && tareas.map((tarea, i) => (
                <Formulario
                    tareas={tarea}
                    key={i}
                    i={i}
                    estadoTarea={estadoTarea}
                    eliminar={eliminar}
                />
            ))}
        </ul>
    );
};

export default ListadoTareas;
