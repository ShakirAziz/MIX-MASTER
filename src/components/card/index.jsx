import "./styles.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.image} alt="" />
      </div>
      <div className="card-text">
        <h4 className="titleOne">{props.titleOne}</h4>
        <h5 className="titleTwo">{props.titleTwo}</h5>
        <p className="titleThree">{props.titleThree}</p>
        <Link to="/detail" className="btn btn1 ">
          {props.disc}
        </Link>
      </div>
    </div>
  );
};
export default Card;
