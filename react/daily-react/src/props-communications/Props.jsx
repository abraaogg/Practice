{
  /*This props.jsx is an example of how it we would use Display.jsx on App.jsx
    So this is a fake App.jsx that we´re using to learn props

    Parent Element
  */
}

import { useState } from "react";
import Display from "./Display";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Parent</h2>
      <button onClick={() => setCount(count + 1)}>+</button>

      {/* pass the state DOWN */}
      <Display count={count} increment={increment} />
    </div>
  );
}

export default App;
