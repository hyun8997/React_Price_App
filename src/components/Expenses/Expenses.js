import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  // 기본값 설정하기(상위->하위)
  const [filteredYear, setFilteredYear] = useState("2020");

  // 연도 필터 데이터 받아오기(하위->상위)
  const getExpensesFilterData = (filterData) => {
    console.log(filterData);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          // 기본값 전달
          selected={filteredYear}
          // 필터 데이터 받아옴
          onGetFilterData={getExpensesFilterData}
        />

        {
          // items.map으로 변경
          props.items.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        }

        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
