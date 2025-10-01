import React, { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Child</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  // Memoize the function
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // empty dependency → function never recreated

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;