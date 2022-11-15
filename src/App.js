import React from "react";
import Expenses from "./components/Expenses/Expenses"; // 컴포넌트를 html처럼 사용 가능, 이름을 대문자부터 시작하도록 해야 함
import NewExpense from "./components/NewExpense/NewExpense"; // form 입력부 사용

const App = () => {
  //Props 사용해서 데이터 전달
  //작은 빌딩 블럭으로부터 UI를 구성하는 접근방법을 composition이라 함
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 28),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expenses);
  };

  //과거 리액트 코드
  // return React.createElement(  //래핑 요소가 필요한 이유, 평행 두 요소가 반환되지 않는 이유
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
