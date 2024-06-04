import React, { useState } from "react";
import "./header.css";
const Header = ({ agregarTarea, busquedaMasRapida }) => {
  const [inputValue, setInputValue] = useState({});

  const mostrarTarea = () => {
    if (!inputValue.titulo || inputValue.titulo === '') {
      alert('Tienes que añadir algo');
      return;
    }
    agregarTarea(inputValue);
    setInputValue({});
  };

  return (
    <div className="header">
      <h2>To-Do List</h2>
      <input
        type="text"
        value={inputValue.titulo || ''}
        onChange={(e) => setInputValue({ titulo: e.target.value })}
      />
      <span onClick={mostrarTarea} className="buttonAdd">Add Task</span>
      <button onClick={busquedaMasRapida} className="buttonCalculate">Tarea más rápida realizada</button>
    </div>
  );
};

export default Header;
