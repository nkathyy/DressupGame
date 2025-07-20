import "./Button.css";

const Button = ({ btnType, btnText, onClick }) => {
  return (
    <button className={btnType} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
