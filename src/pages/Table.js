import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BsPatchPlusFill, BsFillBrushFill, BsArchive } from "react-icons/bs";
import { MdOutlineAddCircle } from "react-icons/md";

///     Este es Componente     //////

function Table(props) {
  let navigate = useNavigate();
  const [state, setState] = useState({
    body: "",
  });

  const handleClick = () => {
    navigate("/addProduct");
  };

  useEffect(() => {
    crearData(props);
  }, []);

  const crearData = (valores) => {
    let info = [];
    let contador = 0;

    valores.data.forEach((element) => {
      info.push(
        <tr key={info.length}>
          <td>{element.idProducto}</td>
          <td>{element.nombre}</td>
          <td>{element.descripcion}</td>
          <td>{element.marca}</td>
          <td>{element.categoria}</td>
          <td>$ {element.precio}</td>
          <td>
            <a href={props.linksAcciones[contador].editar}>
              <BsFillBrushFill />
            </a>
            <a href={props.linksAcciones[contador].eliminar}>
              <BsArchive />
            </a>
          </td>
        </tr>
      );
      contador++;
    });
    setState({ ...state, body: info });
  };

  return (
    <>
      <button onClick={handleClick}>
        <MdOutlineAddCircle />
        Add Product
      </button>
      <table className="table">
        <thead>
          <tr>
            <td className="a">ID</td>
            <td className="a">Nombre</td>
            <td className="a">Descripcion</td>
            <td className="a">Marca</td>
            <td className="a">Categoria</td>
            <td className="a">Precio</td>
            <td className="a">Acciones</td>
          </tr>
        </thead>
        <tbody>{state.body}</tbody>
      </table>
    </>
  );
}

export default Table;
