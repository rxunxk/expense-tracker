import "./App.css";
import Header from "./Components/Header";
import Calculator from "./Components/Calculator";

const REFERENCE_PROJECT =
  "https://budget-calculator-app-using-angular.netlify.app/";

function App() {
  return (
    <div className="App">
      <Header />
      <Calculator />
    </div>
  );
}

export default App;
