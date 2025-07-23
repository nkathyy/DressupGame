import "./Result.css";

export default function Result({ currentItems }) {
  return (
    <div className="assets">
      <img src={`/assets/img/${currentItems.Face}.png`} alt="face"></img>
      <img src={`/assets/img/${currentItems.Clothes}.png`} alt="clothes"></img>
      <img src={`/assets/img/${currentItems.Hair}.png`} alt="hair"></img>
      <img
        src={`/assets/img/${currentItems.Accessory}.png`}
        alt="accessory"
      ></img>
      <img src={`/assets/img/watermark.png`} alt="watermark"></img>
    </div>
  );
}
