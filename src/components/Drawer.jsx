import "./Drawer.css";
import Tabs from "./Tabs";
import Items from "./Items";
import { tabsList } from "../constants/tabsList.js";

const Drawer = ({ currentTab, updateTab, currentElement, updateResult }) => {
  return (
    <div className="drawer">
      <Tabs tabArray={tabsList} currentTab={currentTab} updateTab={updateTab} />

      <Items
        currentTab={currentTab}
        currentElement={currentElement}
        updateResult={updateResult}
      />
    </div>
  );
};

export default Drawer;
