import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([3, 8, 2, 5, 1, 4, 7, 6]);

  const bubbleSort = () => {
    const n = list.length;
    let swapped = false;

    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (list[i] > list[i + 1]) {
          let temp = list[i];
          list[i] = list[i + 1];
          list[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);

    setList(list.slice());
  };

  return (
    <div className="container">
      <h1>Bubble Sort Visualizer</h1>
      <div className="list">
        {list.map((item, index) => (
          <div
            className={`list-item ${index === 0 ? "first-item" : ""}`}
            key={index}
            style={{ height: `${item * 5}px` }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="control-panel">
        <button className="button" onClick={bubbleSort}>
          Sort
        </button>
      </div>
    </div>
  );
}

export default App;
