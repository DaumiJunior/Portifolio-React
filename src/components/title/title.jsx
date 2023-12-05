import "./title.css";
import React from "react";

function template(props) {
  return (
    <div className="title">
      <h1 className="Titulo">{props.titles}</h1>
    </div>
  );
};

export default template;
