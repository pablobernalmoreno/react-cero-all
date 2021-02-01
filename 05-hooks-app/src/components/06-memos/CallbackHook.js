import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
import "../02-useEffect/effects.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(3);

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
