import "./Drawer.css";
import Tabs from "./Tabs";
import Items from "./Items";
import { tabsList } from "../constants/tabsList.js";

const Drawer = ({ currentTab, updateTab, currentItems, updateResult }) => {
  return (
    <div className="drawer">
      <Tabs tabArray={tabsList} currentTab={currentTab} updateTab={updateTab} />

      <Items
        currentTab={currentTab}
        currentItems={currentItems}
        updateResult={updateResult}
      />
    </div>
  );
};

export default Drawer;
