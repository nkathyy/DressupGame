import "./Drawer.css";
import Tabs from "./Tabs";
import Items from "./Items";
import { tabsList } from "../constants/tabsList.js";

const Drawer = ({ currentTab, updateTab }) => {
  return (
    <div className="drawer">
      <Tabs tabArray={tabsList} currentTab={currentTab} updateTab={updateTab} />
      {/* <div className="Items">
        <Item />
      </div>{" "}
       */}
    </div>
  );
};

export default Drawer;
