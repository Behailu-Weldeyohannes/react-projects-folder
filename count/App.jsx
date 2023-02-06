import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount(function(oldValue){
        return oldValue + 1;
    });
  }

  function subtract() {
    setCount(function(oldValue){
        return oldValue-1;
    });
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
}

export default App;
