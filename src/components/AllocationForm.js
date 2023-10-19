import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = () => {
  const { dispatch, remaining, currency } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("Add");

  const handleExpenseChange = (event) => {
    const inputElement = event.target;
    const numericValue = inputElement.valueAsNumber;
    if (!Number.isInteger(numericValue)) {
      inputElement.value = ""; // Clear the field if it's not an integer.
    }
    setCost(numericValue);
  };

  const submitEvent = () => {
    // No valid department name has been selected via dropdown yet.
    if (name === "") {
      alert("Please choose a department.");
    }
    if (cost > remaining) {
      alert(
        `The value cannot exceed remaining funds  ${currency} ${remaining}`
      );
      setCost("");
      return;
    }
    // Create payload object to dispatch.
    const expense = {
      name: name,
      cost: parseInt(cost),
    };

    switch (action) {
      case "Reduce":
        dispatch({
          type: "RED_EXPENSE",
          payload: expense,
        });
        break;
      case "Add":
        dispatch({
          type: "ADD_EXPENSE",
          payload: expense,
        });
        break;
      default:
        alert(`Unknown action: ${action}`);
    }
  };

  // Why do the input groups split when window width is reduced?
  return (
    <div>
      <div className="row justify-content-start">
        <div className="col-12 col-md-auto mb-3">
          <div className="input-group">
            <label
              className="input-group-text input-group-prepend"
              htmlFor="inputGroupSelect01"
            >
              Department
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              onChange={(event) => setName(event.target.value)}
            >
              <option defaultValue>Choose...</option>
              <option value="Marketing" name="marketing">
                Marketing
              </option>
              <option value="Sales" name="sales">
                Sales
              </option>
              <option value="Finance" name="finance">
                Finance
              </option>
              <option value="HR" name="hr">
                HR
              </option>
              <option value="IT" name="it">
                IT
              </option>
              <option value="Admin" name="admin">
                Admin
              </option>
            </select>
          </div>
        </div>
        <div className="col-12 col-md-auto mb-3">
          <div className="input-group">
            <label
              className="input-group-text input-group-prepend"
              htmlFor="inputGroupSelect02"
            >
              Allocation
            </label>
            <select
              className="form-select"
              id="inputGroupSelect02"
              onChange={(event) => setAction(event.target.value)}
            >
              <option defaultValue value="Add" name="Add">
                Add
              </option>
              <option value="Reduce" name="Reduce">
                Reduce
              </option>
            </select>
          </div>
        </div>
        <div className="col-12 col-md-auto mb-3">
          <div className="input-group">
            <label className="input-group-text input-group-prepend">
              {currency}
            </label>
            <input
              className="form-control"
              required="required"
              type="number"
              id="cost"
              value={cost}
              onChange={(event) => handleExpenseChange(event)}
            ></input>
            <button
              className="btn btn-primary input-group-append"
              onClick={submitEvent}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
