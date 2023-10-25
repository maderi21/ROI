import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import Income from "./components/Income";
import CashFlow from "./components/CashFlow";
import Expenses from "./components/Expenses";
import CashRoi from "./components/CashRoi";
import Outcome from "./components/Outcome";

function App() {
  return (
    <div className="bg-primary">
      <div className="container mt-5">
        <Income />
        <CashFlow />
        <Expenses />
        <CashRoi />
        <Outcome />
      </div>
    </div>
  );
}

export default App;
