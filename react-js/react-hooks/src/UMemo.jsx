import React, { useState, useMemo } from "react";

function ExpensiveComponent({ numbers }) {
  const [count, setCount] = useState(0);

  // Only recalculates when `numbers` changes
  const sortedNumbers = useMemo(() => {
    console.log("Sorting...");
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  return (
    <div>
      <p>Sorted: {sortedNumbers.join(", ")}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default ExpensiveComponent
