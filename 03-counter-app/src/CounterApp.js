import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [valor, setValor] = useState(value);

  const handleAdd = () => {
    setValor(valor + 1);
  };

  const handleSubstract = () => {
    setValor(valor - 1);
  };

  const handleReset = () => {
    setValor(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{valor}</h2>
      <button id="minus" onClick={handleSubstract}>-1</button>
      <button id="reset" onClick={handleReset}>RESET</button>
      <button id='plus' onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 0,
};

export default CounterApp;
