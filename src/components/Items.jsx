import "./Items.css";
import * as Constants from "../constants/assetsConstant.js";
import { tabsList } from "../constants/tabsList.js";

const Item = ({ tabName, index, currentElement, updateResult }) => {
  const itemName = tabName.charAt(0).concat(index);

  function onSelect() {
    let newElement = { ...currentElement };
    newElement[tabName] = itemName;
    updateResult(newElement);
    // console.log(newElement);
  }

  return (
    <div
      className={`item ${
        currentElement[tabName] === itemName ? "selectedItem" : ""
      }`}
      onClick={onSelect}
    >
      Item: {tabName.charAt(0).concat(index)}
    </div>
  );
};

const Items = ({ currentTab, currentElement, updateResult }) => {
  const tabName = tabsList[currentTab - 1].name;
  const itemLength = Constants[tabName.toUpperCase().concat("_LENGTH")];
  const items = [];

  for (let i = 0; i < itemLength; i++) {
    items.push(
      <Item
        key={i}
        tabName={tabName}
        index={i}
        currentElement={currentElement}
        updateResult={updateResult}
      />
    );
  }

  return <div className="itemsContainer">{items}</div>;
};

export default Items;
