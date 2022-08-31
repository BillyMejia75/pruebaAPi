import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

function FormularioProductos({ onSubmit,  ...props }) {
  const [state, setState] = useState({
    codigoBarra: "sdfdasvsdf",
    nombre: "",
    descripcion: "",
    marca: "",
    categoria: "",
    precio: "",
  });

  useEffect(() => {
    const dataProps = props?.data ?? {}; // ?? si no contiene nada
    setState({ ...state, ...dataProps });
  }, [props.data]);

  let navigate = useNavigate();

  function handleCancelClick() {
    navigate("/");
  }

  const handleSubmit = (e) => {
    onSubmit(state);    
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={state.nombre}
          onChange={(e) => setState({ ...state, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripcion"
          value={state.descripcion}
          onChange={(e) => setState({ ...state, descripcion: e.target.value })}
        />
        <input
          type="text"
          placeholder="Marca"
          value={state.marca}
          onChange={(e) => setState({ ...state, marca: e.target.value })}
        />
        <input
          type="text"
          placeholder="Categoria"
          value={state.categoria}
          onChange={(e) => setState({ ...state, categoria: e.target.value })}
        />
        <input
          type="text"
          placeholder="Precio"
          value={state.precio}
          onChange={(e) => setState({ ...state, precio: e.target.value })}
        />
        <button>{props.mensaje}</button>
      </form>
      <button onClick={handleCancelClick}>Cancelar</button>
    </>
  );
}

export default FormularioProductos;
