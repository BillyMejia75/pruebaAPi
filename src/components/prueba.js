import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  let unique = 1;

  let urlProductoLista = "http://localhost:5171/api/Producto/Lista";

  const getElements = async (url) => {
    let res = await fetch(url);
    return await res.json();
  };

  console.log("B");
  useEffect(() => {
    console.log("A");
    let productos = getElements(urlProductoLista);
    productos.then((element) => {
      element.response.forEach((element2) => {
        console.log(element2);
        setProducts((products) => [...products, element2]);
      });
    });
  }, []);

  return (
    <>
      <h3>Quiero ver si puedo</h3>
      {products.map((el) => (
        <p key={unique++}>
          <b>Producto</b> {el.nombre}
          <b>Marca</b> {el.marca}
        </p>
      ))}
    </>
  );
}

export default Products;
