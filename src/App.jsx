import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [secondNo, setsecondNo] = useState(1);

  const inc = () => {
    setCount(count + secondNo);
  };

  const dec = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  const changeNotwo = () => {
    setsecondNo(2);
  };
  const changeNofour = () => {
    setsecondNo(4);
  };

  const changeNosix = () => {
    setsecondNo(6);
  };

  const changeNoeight = () => {
    setsecondNo(8);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button className="red" onClick={inc}>
        Increment
      </button>
      <button className="green" onClick={dec}>
        Decrement
      </button>

      <button
        style={{ backgroundColor: secondNo == 2 ? "#0693E3" : "white" }}
        onClick={changeNotwo}
      >
        2
      </button>
      <button
        style={{ backgroundColor:secondNo == 4 ? "#0693E3" : "white" }}
        onClick={changeNofour}
      >
        4
      </button>
      <button
        style={{ backgroundColor: secondNo == 6 ? "#0693E3" : "white" }}
        onClick={changeNosix}
      >
        6
      </button>
      <button
        style={{ backgroundColor: secondNo == 8 ? "#0693E3" : "white" }}
        onClick={changeNoeight}
      >
        8
      </button>
    </>
  );
}

export default App;
