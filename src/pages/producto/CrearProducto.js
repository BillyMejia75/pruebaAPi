import React, { useEffect, useState } from "react";

import FormularioProductos from "./FormularioProductos";

///     Esta es Pagina     //////

const url = "http://localhost:5171/api/Producto/Guardar";

export function CrearProducto() {
  function onSubmit(state) {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idProducto: 1000,
        codigoBarra: state.codigoBarra,
        nombre: state.nombre,
        descripcion: state.descripcion,
        marca: state.marca,
        categoria: state.categoria,
        precio: state.precio,
      }),
    });
  }
  useEffect(() => {
    //agregarProducto();
  }, []);

  return (
    <>
      <h2>Agregar un producto</h2>
      <FormularioProductos onSubmit={onSubmit} mensaje={"Guardar"} />
    </>
  );
}
