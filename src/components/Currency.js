import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState(currency);
  const handleCurrencyChange = (event) => {
    setNewCurrency(event.target.value);
    dispatch({
      type: "CHG_CURRENCY",
      payload: event.target.value,
    });
  };

  return (
    <div className="alert alert-warning slim-alerts">
      <div className="input-group justify-content-center">
        <span className="input-group-text input-group-prepend">Currency:</span>
        <select
          className="form-select money-input-field"
          id="inputGroupSelectCurrency"
          onChange={handleCurrencyChange}
          value={newCurrency}
        >
          <option defaultValue value="$" name="$">
            $ Dollar
          </option>
          <option defaultValue value="£" name="£">
            £ Pound
          </option>
          <option defaultValue value="€" name="€">
            € Euro
          </option>
          <option defaultValue value="₹" name="₹">
            ₹ Rupee
          </option>
        </select>
      </div>
    </div>
  );
};

export default Currency;
