import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  // const [count, setCount] = useState(0);
  //only once
  // const [count, setCount] = useState(() => {
  //   return 0;
  // });
  // multiple values
  const [state, setState] = useState({ count: 0, genre: "Mystery" });
  const count = state.count;
  const genre = state.genre;

  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times`);

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <button
        className="btn btn-primary m-2"
        onClick={(state) => {
          setState((state) => {
            return { ...state, count: state.count + 1 };
          });
        }}
      >
        +
      </button>
      {genre} {name} has clicked {count} times
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          setState((state) => {
            return { ...state, count: state.count - 1 };
          });
        }}
      >
        -
      </button>
    </>
  );
}

export default Counter;
