import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FormularioProductos from "./FormularioProductos";

///     Esta es Pagina     //////

let url = "http://localhost:5171/api/Producto/Obtener/";

function EditarProducto() {
  let { id } = useParams();
  const [state, setState] = useState();

  const getElements = async (url) => {
    let res = await fetch(url);
    return await res.json();
  };

  //Crear onSubmit de Editar

  function getProducto() {
    let res = getElements(url + id);
    res.then((element) => {
      setState(element.response);
    });
  }
  useEffect(() => {
    getProducto();
  }, []);
  return (
    <>
      <h2>Editar un producto</h2>
      <FormularioProductos data={state} mensaje={"Actualizar"}/>
    </>
  );
}

export default EditarProducto;
