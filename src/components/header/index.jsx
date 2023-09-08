import { Link } from "react-router-dom";
import "./styles.css";
const NavBar = () => {
  console.log("I rendered!");
  return (
    <div className="NavBar">
      <p className="Navlogo">MixMaster</p>

      <ul className="NavLinks">
        <li className="NavLink">
          <Link to="/">Home</Link>
        </li>
        <li className="NavLink">
          <Link to="/about">About</Link>
        </li>

        <li className="NavLink">
          <Link to="/news">Newsletter</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
