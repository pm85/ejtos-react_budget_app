import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState(currency);
  const handleCurrencyChange = (event) => {
    console.log("In handle Curreny Change function");
    setNewCurrency(event.target.value);
    dispatch({
      type: "CHG_CURRENCY",
      payload: event.target.value,
    });
  };
  return (
    <div className="alert alert-secondary">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Currency</span>
        </div>
        <select
          className="custom-select"
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
