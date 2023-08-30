import "./styles.css";
const Button = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="btn">
        search
      </button>
    </div>
  );
};
export default Button;
