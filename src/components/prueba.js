import React, { useState, useEffect } from "react";
import Loader from "./loader";

import Modal from "./modal";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let unique = 1;

  let urlProductoLista = "http://localhost:5171/api/Producto/Lista";

  const getElements = async (url) => {
    let res = await fetch(url);
    return await res.json();
  };

  const Consultas = () => {
    let productos = getElements(urlProductoLista);
    productos.then((element) => {
      element.response.forEach((element2) => {
        setProducts((products) => [...products, element2]);
        setLoading(false);
      });
    });
  };

  useEffect(() => {
    Consultas();
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <h3>Productos</h3>
        <Modal data={products} />
      </>
    );
  }
}

export default Products;
