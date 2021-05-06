import React from "react";
import { useDispatch } from "react-redux";
import { decreaseCounter } from "../redux/actions";

const DecreaseCounter = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(decreaseCounter())}>-1</button>;
};

export default DecreaseCounter;
