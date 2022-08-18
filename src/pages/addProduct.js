import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  let navigate = useNavigate();
  const [nombre, setNombre] = useState("");

  function handleClick() {
    navigate("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nombre);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Agregar un producto</h2>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input type="text" placeholder="Descripcion" />
        <input type="text" placeholder="Marca" />
        <input type="text" placeholder="Categoria" />
        <input type="text" placeholder="Precio" />
        <input type="submit" value="Enviar" />
      </form>
      <button onClick={handleClick}>Cancelar</button>
    </>
  );
}

export default AddProduct;
