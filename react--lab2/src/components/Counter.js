import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  const styles = {
    width: "150px",
    height: "50px",
    margin: "35px",
  };

  return (
    <div style={{ margin: "150px" }}>
      <b> Liczba klikniec: {count}</b>
      <button onClick={handleClick} style={styles}>
        Kliknij mnie
      </button>
    </div>
  );
}

export default Counter;
