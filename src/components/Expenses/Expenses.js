import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  // 기본값 설정하기(상위->하위)
  const [filteredYear, setFilteredYear] = useState("2020");
  // 필터값용 State 관리, 초기값은 App에서 받아온 데이터 사용
  const [filteredExpenses, setFilteredExpense] = useState(props.items);

  // 연도 필터 데이터 받아오기(하위->상위)
  const getExpensesFilterData = (filterData) => {
    // 필터값으로 배열 잘라서 tmp로
    const filteredExpensesTmp = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filterData;
    });

    // tmp를 State 현재값으로 변경
    setFilteredExpense(filteredExpensesTmp);
    // select를 선택한 값으로 변경
    setFilteredYear(filterData);
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
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
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
