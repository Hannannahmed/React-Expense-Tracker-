import React from "react";
import Expensedate from "./Expensedate";
import "./Expenseitem.css";
import Card from "../UI/Card";

const Expenseitem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <Expensedate date={props.date} />
        <div className="expense-item__description">
          <h1>{props.title}</h1>
          <p>{props.amount}</p>
        </div>
      </Card>
    </li>
  );
};

export default Expenseitem;
