import "./App.css";
import Routers from "./Routers";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Routers />
      </header>
    </div>
  );
}

export default App;
