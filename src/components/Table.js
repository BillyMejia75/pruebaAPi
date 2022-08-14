import React, { useState, useEffect } from "react";

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
      //info.push(<Table key={info.length} data={element} />);
      info.push(<tr key={info.length}> {element} </tr>);
    });
    setState({ ...state, body: info });
  };

  return (
    <table>
      <thead>
        <tr>
          <td>sfdsf</td>
          <td>sdfsdf</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>dsfsdf</td>
          <td>sdfsdf</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
