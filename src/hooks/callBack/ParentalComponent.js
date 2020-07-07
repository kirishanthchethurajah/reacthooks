import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentalComponent() {
  const [age, setAge] = useState(27);
  const [salary, setSalary] = useState(4000);

  const incrementAge = useCallback(() => {
    setAge((age) => age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((salary) => salary + 100);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentalComponent;
