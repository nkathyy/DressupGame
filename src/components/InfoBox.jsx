import "./InfoBox.css";

const InfoBox = ({ isOpenPopup, closePopup }) => {
  return (
    <div
      className="popupArea"
      style={{ display: isOpenPopup ? "flex" : "none" }}
    >
      <div className="popupBox">
        <button className="closeBtn" onClick={closePopup}>
          X
        </button>
        <h2>Title</h2>
        <ul>
          <li>Choose assets in the drawer.</li>
          <li>Click the Save button to save the image.</li>
          <li>The image would be saved in .png</li>
          <li>Please do not remove watermark on the result image.</li>
          <li>
            All right reserved by <i>hn104mi</i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoBox;
