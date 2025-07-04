// import logo from "./logo.svg";
import "./App.css";
import Result from "./components/Result";
import Drawer from "./components/Drawer";
import Button from "./components/Button";

function App() {
  return (
    <div className="app">
      <div className="box">
        <Result />
      </div>
      <div className="box right">
        <h1>test</h1>
        <div className="buttons">
          <Button />
          <Button />
        </div>
        <Drawer />
      </div>
    </div>
  );
}

export default App;
