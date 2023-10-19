import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const MAX_BUDGET = 20000;
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const handleBudgetChange = (event) => {
    const inputElement = event.target;
    const numericValue = inputElement.valueAsNumber;
    if (!Number.isInteger(numericValue)) {
      inputElement.value = { budget }; // Clear the field if it's not an integer
    } else {
      setNewBudget(numericValue);
    }
  };

  // Submits a budget change action to the App reducer.
  const submitBudget = () => {
    if (newBudget < totalExpenses) {
      alert("Budget can not be reduced below current expenses.");
      setNewBudget(budget);
    } else if (newBudget > MAX_BUDGET) {
      alert(`Budget may not exceed ${currency}20000.`);
      setNewBudget(budget);
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: newBudget,
      });
    }
  };

  return (
    <div className="alert alert-primary slim-alerts">
      <div className="input-group justify-content-center">
        <label className="input-group-text input-group-prepend">
          Budget: {currency}
        </label>
        <input
          className="form-control money-input-field"
          type="number"
          step="10"
          value={newBudget}
          onChange={(event) => handleBudgetChange(event)}
          onBlur={submitBudget}
          // Submit a new budget also when the input field still has focus
          // but user hits the enter key.
          onKeyDown={(event) => (event.key === "Enter" ? submitBudget() : null)}
        ></input>
      </div>
    </div>
  );
};
export default Budget;
