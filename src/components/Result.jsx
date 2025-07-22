import "./Result.css";

export default function Result({ currentElement }) {
  return (
    <div className="assets">
      <img src={`/assets/img/${currentElement.Face}.png`} alt="face"></img>
      <img
        src={`/assets/img/${currentElement.Clothes}.png`}
        alt="clothes"
      ></img>
      <img src={`/assets/img/${currentElement.Hair}.png`} alt="hair"></img>
    </div>
  );
}
