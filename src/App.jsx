import "./App.css";
import Result from "./components/Result";
import Drawer from "./components/Drawer";
import Button from "./components/Button";
import InfoBox from "./components/InfoBox";
import { useRef, useState } from "react";
import { img } from "./constants/imgMap.js";

const App = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const updateTab = (newTab) => {
    setCurrentTab(newTab);
  };

  const [currentItems, setCurrentItems] = useState({
    Face: "F0",
    Clothes: "C0",
    Hair: "H0",
    Accessory: "A0",
  });

  const canvasRef = useRef(null);

  const updateResult = (newItems) => {
    setCurrentItems(newItems);
  };

  const loadImage = (src) =>
    new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    });

  const onSave = async () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, 600, 750);

    const images = await Promise.all(
      Object.values(currentItems).map((value) => loadImage(img[`${value}`]))
    );

    images.forEach((img) => {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    });

    context.drawImage(
      await loadImage(img["watermark"]),
      0,
      0,
      canvas.width,
      canvas.height
    );

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    link.download = `${Date.now()}.png`;
    link.href = url;
    link.click();
  };

  const openPopup = () => {
    setIsOpenPopup(true);
  };

  const closePopup = () => {
    setIsOpenPopup(false);
  };

  return (
    <>
      <InfoBox isOpenPopup={isOpenPopup} closePopup={closePopup} />

      <canvas ref={canvasRef} width="600px" height="750px"></canvas>
      <div className="app">
        <p className="wm">© 2025 hn104mi All rights reserved.</p>
        <div className="outerContainer">
          <h1 className="bigScreen">2025 S.COUPS Birthday Project</h1>
          <div className="container">
            <div className="box">
              <h2 className="mobile">2025 S.COUPS Birthday Project</h2>
              <Result currentItems={currentItems} />
              <Button btnType="long" btnText="Save" onClick={onSave} />
              <div className="infoBtn">
                <Button btnType="round" btnText="!" onClick={openPopup} />
              </div>
            </div>
            <div className="box">
              <Drawer
                currentTab={currentTab}
                updateTab={updateTab}
                currentItems={currentItems}
                updateResult={updateResult}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
