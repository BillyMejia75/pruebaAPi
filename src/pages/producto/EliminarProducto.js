import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

///     Esta es Pagina     //////

const urlEliminar = "http://localhost:5171/api/Producto/Eliminar/";

export default function EliminarProducto() {
  let { id } = useParams();

  let navigate = useNavigate();

  const eliminar = () => {
    fetch(urlEliminar + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idProducto: id,
      }),
    });
  };

  useEffect(() => {
    eliminar();
  },[])

  return (
    <>
      <h2>ID del producto eliminado: {id}</h2>
      <button onClick={() => navigate("/")}>Continuar</button>
    </>
  );
}
