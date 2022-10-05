import React from "react";
import "./Programas.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programas = () => {
  return (
    <div className="programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span  className="stroke-text">Nossos</span>
        <span>programas </span>
        <span className="stroke-text">Para você shaypar</span>
      </div>

      <div className="programs-categories">
        {programsData.map((programa) => (
          <div className="category">
            {programa.image}
            <span>{programa.heading}</span>
            <span>{programa.details}</span>
            <div className="join-now">
              <span>Faça parte</span>
              <img src={RightArrow} alt="seta direita" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programas;
