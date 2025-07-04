import "./Drawer.css";
import Tab from "./Tab";
import Item from "./Item";

export default function Drawer() {
  return (
    <div className="drawer">
      <div className="tabs">
        <Tab />
      </div>
      <div className="Items">
        <Item />
      </div>
    </div>
  );
}
