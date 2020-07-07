import React, { useEffect, useRef, useState } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  const timerRef = useRef();

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    inputRef.current.focus();
    timerRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <>
      <div>
        <input ref={inputRef} type="data" />
        {timer}
      </div>
      <div>
        <button onClick={() => clearInterval(timerRef.current)}>
          stop timer
        </button>
      </div>
    </>
  );
}

export default FocusInput;
