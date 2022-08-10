import React, { useState, useEffect } from "react";

function Card(props) {
  const [state, setState] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
        {console.log("Props", props.data)}
        <div className="body-card">
        <div className="container">
          <div className="content">
            <h1>{props.data.nombre}</h1>
            <h3>{props.data.categoria}</h3>
            <h3>{props.data.codigoBarra}</h3>
            <img src={props.data.codigoBarra} />
            <h3>{props.data.precio}</h3>
          </div>
          <div className="flap"></div>
        </div>
        </div>
      
    </>
  );
}

export default Card;
