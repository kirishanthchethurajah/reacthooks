import React, { useState, useMemo } from "react";

function SquareNumberTheme(props) {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return number * 2;
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  return (
    <>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </div>
      <div>
        <button
          onClick={() => setDark((toggle) => !toggle)}
          className="btn btn-primary m-2"
        >
          Change Theme
        </button>
      </div>

      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

export default SquareNumberTheme;
