import React from "react"; // 리액트 훅을 추가해서 클릭이벤트를 처리하고자 함
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// props 받음! key와 value 데이터를 받아옴
const ExpenseItem = (props) => {
  //하나의 컴포넌트는 하나로 묶는 부모 요소가 필수(root처럼)
  //JSX의 html에는 class 대신 className을 사용함

  return (
    // 기존의 div를 Card.js 래퍼 컴포넌트선언해서 코드 중복 제거
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
