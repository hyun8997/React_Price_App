import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // 사용자 이벤트를 추가하기 위해 지정할 함수 생성
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* 하위 컴포넌트로부터 상향으로 데이터를 받아오기 위한 사용자 이벤트를 추가함 */}
      {/* 추가한 이벤트는 하위 컴포넌트에서 props내에 존재함 */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
