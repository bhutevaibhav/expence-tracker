import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const filterChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Flter by Year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value={2018}>2018</option>
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
