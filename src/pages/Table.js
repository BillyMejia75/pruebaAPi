import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BsPatchPlusFill, BsFillBrushFill, BsArchive } from "react-icons/bs";
import { MdOutlineAddCircle } from "react-icons/md";

function Table(props) {
  const [state, setState] = useState({
    body: "",
  });

  useEffect(() => {
    crearData(props);
  }, []);

  const crearData = (valores) => {
    let info = [];

    valores.data.forEach((element) => {
      info.push(
        <tr key={info.length}>
          <td>{element.nombre}</td>
          <td>{element.descripcion}</td>
          <td>{element.marca}</td>
          <td>{element.categoria}</td>
          <td>{element.precio}</td>
          <td>
            <a href={props.linksAcciones.crear}>
              <BsPatchPlusFill />
            </a>
            <a href={props.linksAcciones.editar}>
              <BsFillBrushFill />
            </a>
            <a href={props.linksAcciones.eliminar}>
              <BsArchive />
            </a>
          </td>
        </tr>
      );
    });
    setState({ ...state, body: info });
  };

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/addProduct");
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
