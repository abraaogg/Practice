import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      <button onClick={() => setCount(count < 10 ? count + 1 : 10)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
