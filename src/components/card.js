import React, { useState, useEffect } from "react";

import { FaShoppingCart } from "react-icons/fa";

function Card(props) {
  const [state, setState] = useState([]);

  //useEffect(() => {}, []);

  return (
    <>
      <div id="container">
        <div className="product-details">
          <h1>{props.data.nombre}</h1>
          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </span>

          <p className="information">{props.data.descripcion}</p>

          <div className="control">
            <button className="btn">
              <span className="price">${props.data.precio}</span>
              <span className="shopping-cart">
                <i className="fa fa-shopping-cart" aria-hidden="true">
                  <FaShoppingCart />
                </i>
              </span>
              <span className="buy">Get now</span>
            </button>
          </div>
        </div>

        <div className="product-image">
          <img src={props.data.codigoBarra} />
        </div>
      </div>
    </>
  );
}

export default Card;
