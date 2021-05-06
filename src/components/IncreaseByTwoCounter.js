import React from "react";
import { useDispatch } from "react-redux";
import { increaseByTwoCounter } from "../redux/actions";

const IncreaseByTwoCounter = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(increaseByTwoCounter())}>+2</button>;
};

export default IncreaseByTwoCounter;
