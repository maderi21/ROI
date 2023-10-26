import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import Income from "./components/Income";
import CashFlow from "./components/CashFlow";
import Expenses from "./components/Expenses";
import CashRoi from "./components/CashRoi";
import Outcome from "./components/Outcome";

function App() {
  return (
    <div className="bg-primary container">
      <section>
        <div className="row align-items-center">
          <div className="col-md p-5">
            <Income />
          </div>
          <div className="col-md p-5">
            <CashFlow />
          </div>
        </div>
      </section>
      <section>
        <div className="row align-items-center">
          <div className="col-md p-5">
            <Expenses />
          </div>
          <div className="col-md p-5">
            <CashRoi />
          </div>
        </div>
      </section>
      <Outcome />
    </div>
  );
}

export default App;
