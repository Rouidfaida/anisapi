import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DataList from "./Components/DataList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import PublicList from "./Components/PublicList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <DataList/>
      <PublicList />
    </div>
  );
}

export default App;
