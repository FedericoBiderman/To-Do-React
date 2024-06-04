import React, { useState } from "react";
import Header from "./componentes/Header";
import ListadoTareas from "./componentes/ListadoTareas";
import './App.css';


function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    tarea.id = Date.now();
    setTareas([...tareas, tarea]);
  };

  const estadoTarea = i => {
    const nuevaTarea = [...tareas];
    nuevaTarea[i].completada = !nuevaTarea[i].completada;
    setTareas(nuevaTarea);
  };

  const eliminar = i => {
    setTareas(tareas.filter((tarea, index) => index !== i));
  };

  const busquedaMasRapida = () => {
    if (!tareas.length) {
      alert('No hay tareas para buscar');
      return;
    }
    const tareaMasRapida = tareas.reduce((tarea1, tarea2) => {
      if (tarea1.completada && !tarea2.completada) {
        return tarea1;
      }
      if (!tarea1.completada && tarea2.completada) {
        return tarea2;
      }
      return tarea1.completada ? tarea1 : tarea2;
    });
    alert(`La tarea más rápida realizada es: ${tareaMasRapida.titulo}`);
  };

  return (
    <>  
      <div className="container">
        <div className="row">
          <Header agregarTarea={agregarTarea} busquedaMasRapida={busquedaMasRapida} />
          <ListadoTareas tareas={tareas} estadoTarea={estadoTarea} eliminar={eliminar} />
        </div>
      </div>
    </>
  );
}

export default App;
