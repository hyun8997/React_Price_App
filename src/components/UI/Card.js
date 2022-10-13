import React from "react";
import "./Card.css";

//래퍼 컴포넌트
const Card = (props) => {
  // css가 약간 깨짐 Card.js에서 ExpressItem.js에 넣은 class를 인식하지 못해서 그럼
  // <Card className="expense-item">
  // className을 아래와 같이 동적으로 선언함
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
