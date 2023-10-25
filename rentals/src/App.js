import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import Income from "./components/Income";
import CashFlow from "./components/CashFlow";

function App() {
  return (
    <div className="bg-primary">
      <div className="container mt-5">
        <Income />
        <CashFlow />
      </div>
    </div>
  );
}

export default App;
