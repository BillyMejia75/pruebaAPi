import React, { useState, useEffect } from "react";

import Card from "./Card";

function Modal(props) {
  const [state, setState] = useState({
    body: "",
  });

  useEffect(() => {
    crearData(props);
  }, []);

  const crearData = (valores) => {
    let info = [];
    valores.data.forEach((element) => {
      info.push(<Card key={info.length} data={element} />);
    });
    setState({ ...state, body: info });
  };

  return (
    <>
      <div>{state.body}</div>
    </>
  );
}

export default Modal;
