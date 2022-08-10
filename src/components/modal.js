import React, { useState, useEffect } from "react";

import Card from "./card";

function Modal(props) {
  const [state, setState] = useState({
      body: "",
  });

  useEffect(() => {
      crearData(props);
    
  }, []);

  const crearData = (valores) => {
    let info = [];
    console.log("Data" , valores);
    valores.data.forEach((element) => {
        info.push(<Card key={info.length} data={element}/>)
    })
    console.log("info", info);
    setState({...state, body:info})
  }

  return (
    <>
        <div>
            {state.body}
        </div>
    </>
  );
}

export default Modal;
