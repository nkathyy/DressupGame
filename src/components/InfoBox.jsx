import "./InfoBox.css";
import Ig from "../assets/instagram.png";

const InfoBox = ({ isOpenPopup, closePopup }) => {
  return (
    <div
      className="popupArea"
      style={{ display: isOpenPopup ? "flex" : "none" }}
    >
      <div className="popupBox">
        <button className="closeBtn" onClick={closePopup}>
          <h2>X</h2>
        </button>
        <h2 className="infoTitle">2025 Project</h2>
        <ul>
          <li>
            <h3>Choose assets in the drawer.</h3>
          </li>
          <li>
            <h3>Click the Save button to save the image.</h3>
          </li>
          <li>
            <h3>Please do not remove watermark on the result image.</h3>
          </li>
        </ul>
        <a href="" target="_blank" rel="noreferrer">
          <img src={Ig} className="igIcon" alt="ig link" />
        </a>
      </div>
    </div>
  );
};

export default InfoBox;
