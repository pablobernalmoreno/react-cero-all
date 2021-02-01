import { useState } from "react";

export const useCounter = (intialState = 0) => {
  const [state, setState] = useState(intialState);

  const increment = (factor = 1) => {
    setState(state + factor);
  };

  const decrement = (factor = 1) => {
    setState(state - factor);
  };

  const reset = () => {
    setState(intialState);
  };
  return {
    state,
    increment,
    decrement,
    reset,
  };
};
