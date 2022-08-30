import React from "react";
import "../loader.css";

function Loader() {
  return (
    <>
      <div className="body">
        <div className="loader-wrapper">
          <div className="loader loader-outer">
            <div className="loader loader-inner"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
