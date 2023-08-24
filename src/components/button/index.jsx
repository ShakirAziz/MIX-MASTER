import "./styles.css";

const Button = (props) => {
  return (
    <div>
      <button type={props.btnType} className="btn">
        {props.btnText}
      </button>
    </div>
  );
};
export default Button;
