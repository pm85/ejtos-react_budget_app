import React from "react";

// Import custom CSS for App.
import "./App.css";

//Import Bootstrap.
import "bootstrap/dist/css/bootstrap.min.css";

//Import components.
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import Currency from "./components/Currency";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";

import { AppProvider } from "./context/AppContext";
const App = () => {
  return (
    //shadow-sm rounded
    <AppProvider>
      <nav className="navbar navbar-light bg-light shadow">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 justify-content-center">
            Company Budget Allocation
          </span>
        </div>
      </nav>
      <div className="container">
        <div className="row align-items-center gx-3 gy-0 mt-3 pt-3 shadow rounded">
          <div className="col-12 col-lg-auto">
            <Budget />
          </div>
          <div className="col-12 col-lg-auto">
            <Remaining />
          </div>
          <div className="col-12 col-lg-auto">
            <ExpenseTotal />
          </div>
          <div className="col-12 col-lg-auto">
            <Currency />
          </div>
        </div>
        <div className="row gx-3 gy-0 mt-3 shadow rounded">
          <h3 className="mt-3">Allocation</h3>
          <div className="row mt-3">
            <div className="col">
              <ExpenseList />
            </div>
          </div>
        </div>
        <div className="row gx-3 gy-0 mt-3 shadow rounded">
          <h3 className="mt-3">Change allocation</h3>
          <div className="row mt-3">
            <div className="col">
              <AllocationForm />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
