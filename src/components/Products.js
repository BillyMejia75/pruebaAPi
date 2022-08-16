import React, { useState, useEffect } from "react";
import Loader from "./loader";

import Modal from "./modal";
import Table from "./Table";

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
          crear:
            "https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Styling_tables",
          editar:
            "https://www.google.com.sv/webhp?hl=es-419&sa=X&ved=0ahUKEwj0yq3Qrcr5AhWWSTABHfFpBNYQPAgI",
          eliminar: "https://www.youtube.com/",
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
