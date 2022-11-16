import React, { useState } from "react";
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

  // 토글값 받고 변경하도록 useState 사용
  const [expenseToggle, setExpenseToggle] = useState(false);
  // 기본 State에서 form State로 변경
  const onAddNewExpense = (event) => {
    setExpenseToggle(true);
  };
  // form에서 캔슬될때 기본 State
  const onCancelNewExpense = (event) => {
    setExpenseToggle(false);
  };

  return (
    <div className="new-expense">
      {/* 하위 컴포넌트로부터 상향으로 데이터를 받아오기 위한 사용자 이벤트를 추가함 */}
      {/* 추가한 이벤트는 하위 컴포넌트에서 props내에 존재함 */}
      {!expenseToggle && (
        <button type="button" onClick={onAddNewExpense}>
          Add New Expense
        </button>
      )}
      {expenseToggle && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onCancelNewExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
