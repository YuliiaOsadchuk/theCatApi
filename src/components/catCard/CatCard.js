import React from "react";
import "./CatCard.scss";

const CatCard = ({ breed, desc, image, wiki }) => {
  return (
    <div className="cat-cards row mb">
      <div className="cat-img-container">
        <img src={image} alt="cat"></img>
      </div>
      <div className="info-container column">
        <span className="text">{breed}</span>
        <a className="text-href" href={wiki}>
          wiki
        </a>
        <div className="cat-desc-container">
          <span className="desc-text">{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
