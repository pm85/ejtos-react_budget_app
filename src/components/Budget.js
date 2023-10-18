import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };
  return (
    <div className="alert alert-secondary">
      <div className="input-group">
        <div className="input-group-prepend">
          <label className="input-group-text">Budget: {currency}</label>
        </div>
        <input
          type="number"
          step="10"
          value={newBudget}
          onChange={handleBudgetChange}
        ></input>
      </div>
    </div>
  );
};
export default Budget;
