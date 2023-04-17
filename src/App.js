import "./App.css";
import Header from "./Components/Header";
import Calculator from "./Components/Calculator";

function App() {
  return (
    <div className="App">
      <Header amount={0} />
      <Calculator />
    </div>
  );
}

export default App;
