import React, { useContext } from "react";
import { TiPlusOutline, TiMinusOutline, TiDeleteOutline } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { currency, dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const changeAllocation = (name, type) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: type,
      payload: expense,
    });
  };

  return (
    <tr>
      <td className="unselectable">{props.name}</td>
      <td className="unselectable">
        {currency}
        {props.cost}
      </td>
      <td>
        <div>
          <TiPlusOutline
            size="1.5em"
            onClick={() => changeAllocation(props.name, "ADD_EXPENSE")}
          ></TiPlusOutline>
        </div>
      </td>
      <td>
        <TiMinusOutline
          size="1.5em"
          onClick={() => changeAllocation(props.name, "RED_EXPENSE")}
        ></TiMinusOutline>
      </td>
      <td>
        <TiDeleteOutline
          size="1.5em"
          onClick={handleDeleteExpense}
        ></TiDeleteOutline>
      </td>
    </tr>
  );
};

export default ExpenseItem;
