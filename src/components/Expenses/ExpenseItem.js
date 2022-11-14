import React, { useState } from "react"; // 리액트 훅을 추가해서 클릭이벤트를 처리하고자 함
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// props 받음! key와 value 데이터를 받아옴
const ExpenseItem = (props) => {
  //하나의 컴포넌트는 하나로 묶는 부모 요소가 필수(root처럼)
  //JSX의 html에는 class 대신 className을 사용함

  // useState(관리값지정): 리액트 훅, 두개 요소의 배열을 반환하므로 배열분리해서 사용함
  const [title, setTitle] = useState(props.title); // 1:현재상태값, 2:업데이트하는함수

  // function clickHandler() {}
  const clickHandler = () => {
    setTitle("Updated!"); // 값을 받아서 state를 업데이트
    console.log(title);
  };

  return (
    // 기존의 div를 Card.js 래퍼 컴포넌트선언해서 코드 중복 제거
    <Card className="expense-item">
      {
        // 너무 커져서 다른 컴포넌트로 분리하려 함, 달력 형태 컴포넌트(ExpenseDate.js), 상단에 import 필요!
        /* 
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div> 
      */
      }
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
