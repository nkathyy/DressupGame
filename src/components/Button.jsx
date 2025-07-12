import "./Button.css";

const Button = ({ btnType, btnText }) => {
  return <button className={btnType}>{btnText}</button>;
};

export default Button;
