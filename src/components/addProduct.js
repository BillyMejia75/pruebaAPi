import React from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return <button onClick={handleClick}>Cancelar</button>;
}

export default AddProduct;
