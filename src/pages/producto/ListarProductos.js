import React, { useState, useEffect } from "react";
import Loader from "../../components/loader";

//import Modal from "./modal";
import Table from "../Table";

///     Esta es Pagina     //////

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState({});

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
        setLinks({
          crear: "http://localhost:3000/addProduct",
          editar: "http://localhost:3000/editProduct",
          eliminar: "http://localhost:3000/deleteProduct",
        });
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
        {/* <Modal data={products} /> */}
        <Table data={products} linksAcciones={links} />
      </>
    );
  }
}

export default Products;
