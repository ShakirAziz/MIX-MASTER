import React from "react";
import "./styles.css";
import image3 from "../../assets/images/3.jpg";
import { Link } from "react-router-dom";
const CardDetail = () => {
  return (
    <div className="cardContainer">
      <span>
        <Link to="/">back home</Link>
      </span>
      <div className="cardHeading">
        <h1>Ace</h1>
      </div>
      <div className="childContainer">
        <div className="cardImage">
          <img src={image3} alt="Ace" />
        </div>
        <div className="cardDetails">
          <h4>
            <span className="heighlitedText">Name :</span> Ace
          </h4>
          <h4>
            <span className="heighlitedText">Category :</span> Cocktail
          </h4>
          <h4>
            <span className="heighlitedText">Info :</span> Alcoholic
          </h4>
          <h4>
            <span className="heighlitedText">Glass :</span> Martini Glass
          </h4>
          <h4>
            <span className="heighlitedText">Ingredients :</span>{" "}
            Gin,Grenadine,Heavy Cream,Milk,Egg White
          </h4>
          <h4>
            <span className="heighlitedText">Instructions :</span> Shake All The
            Ingredients In A Cocktail Shaker And Ice Then Strain In A Cold
            Glass.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
