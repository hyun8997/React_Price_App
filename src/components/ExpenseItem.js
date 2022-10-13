import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

// props 받음! key와 value 데이터를 받아옴
function ExpenseItem(props) {
  //하나의 컴포넌트는 하나로 묶는 부모 요소가 필수(root처럼)
  //JSX의 html에는 class 대신 className을 사용함

  return (
    <Card className="expense-item">
      {
        // 기존의 div를 Card.js 래퍼 컴포넌트선언해서 코드 중복 제거
      }
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
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
