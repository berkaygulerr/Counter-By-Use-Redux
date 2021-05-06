import React from "react";
import { useDispatch } from "react-redux";
import { increaseCounter } from "../redux/actions";

const IncreaseCounter = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(increaseCounter())}>+1</button>;
};

export default IncreaseCounter;
