import "./card.css";
import React from "react";

function template(props) {
  return (
    <div className="card">
      <div className="imgCard">
      <img className="Img-skill" src={props.Imagem} alt="" />
      </div>
      <div className="text-Card">
      <h2>{props.tecno}</h2>
      <p>{props.descrição}</p>
      </div>
    </div>
  );
};

export default template;
