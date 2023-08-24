import "./styles.css";
const NavBar = () => {
  return (
    <div className="NavBar">
      <p className="Navlogo">MixMaster</p>

      <ul className="NavLinks">
        <li className="NavLink">Home</li>
        <li className="NavLink">About</li>
        <li className="NavLink">Newsletter</li>
      </ul>
    </div>
  );
};
export default NavBar;
