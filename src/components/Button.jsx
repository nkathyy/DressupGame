import "./Button.css";

const Button = ({ btnType, btnText, onClick }) => {
  return (
    <button className={btnType} onClick={onClick}>
      <h2>{btnText}</h2>
    </button>
  );
};

export default Button;
