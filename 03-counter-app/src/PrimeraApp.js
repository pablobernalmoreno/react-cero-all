import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, mensaje }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>{mensaje}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  mensaje: "Mi primera app",
};

export default PrimeraApp;
