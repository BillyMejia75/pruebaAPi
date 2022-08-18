import React from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <button onClick={handleClick}>Cancelar</button>
      <form onSubmit={handleSubmit}>
        <h2>Agregar un producto</h2>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Descripcion" />
        <input type="text" placeholder="Marca" />
        <input type="text" placeholder="Categoria" />
        <input type="text" placeholder="Precio" />
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}

export default AddProduct;
