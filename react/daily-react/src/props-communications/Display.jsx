{/*Child element*/}
function Display({ count, increment }) {
  return (
    <div>
      <h3>Child</h3>
      <p>{count}</p>

      {/* button will live here */}
<button onClick={increment}>+</button>
    </div>
  );
}

export default Display;
