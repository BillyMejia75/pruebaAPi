import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

function FormularioProductos() {
  const [state, setState] = useState({
    codigoBarra: "sadsadadqd",
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: "",
  });

  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.nombre);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setState({ ...state, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripcion"
          onChange={(e) => setState({ ...state, descripcion: e.target.value })}
        />
        <input
          type="text"
          placeholder="Marca"
          onChange={(e) => setState({ ...state, marca: e.target.value })}
        />
        <input
          type="text"
          placeholder="Categoria"
          onChange={(e) => setState({ ...state, categoria: e.target.value })}
        />
        <input
          type="text"
          placeholder="Precio"
          onChange={(e) => setState({ ...state, precio: e.target.value })}
        />
        <button>Guardar</button>
      </form>
      <button onClick={handleClick}>Cancelar</button>
    </>
  );
}

export default FormularioProductos;
