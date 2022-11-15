import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // 1. 3개 State 사용
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 2. 1개의 State로 사용
  //    각 3개 State 하는거보다 하나의 State로
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    // 1. 3개 State 사용, onChange event의 구조에 따라 데이터 업데이트 시킴
    setEnteredTitle(event.target.value); // onChange event의 구조에 따라 데이터 업데이트 시킴
    // 2. 1개의 State로 사용, 스프레드 연산자(...)를 사용해서 변경없는 나머지값들은 이전값을 그대로 가지도록 함
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // 3. 이전 State에 의존하는 State 사용
    //    동시에 수많은 상태 업데이트를 계획하면 잘못된 State로부터 값을 가져올 수 있으므로
    //    아래 방법을 통해 함수안에서 최신의 스냅샷을 가져옴을 보장해줌
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // 요청 보내지 않을때 멈춰둠

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // submit후 지워지도록 하는 양방향 바인딩
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
