// import logo from "./logo.svg";
import "./App.css";
import Result from "./components/Result";
import Drawer from "./components/Drawer";
import Button from "./components/Button";

function App() {
  return (
    <div className="app">
      <div>
        <h1>test</h1>
        <div className="container">
          <div className="box">
            <Result />
            <Button btnType="long" btnText="Save" />
            <div className="infoBtn">
              <Button btnType="round" btnText="?" />
            </div>
          </div>
          <div className="box">
            <Drawer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
