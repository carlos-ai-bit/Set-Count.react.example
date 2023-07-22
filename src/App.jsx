import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState("0");
  function decreementCount() {
    setCount(count - 1);
  }
  function increementCount() {
    setCount(count + 1);
  }
  return (
    <>
      <div className="text-center my-4">
        <h1 className="font-medium">Set Count...</h1>
        <hr />
        <button
          onClick={decreementCount}
          className="cursor-pointer mt-3 text-white bg-blue-900 font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-700"
        >
          -
        </button>
        <span className="font-bold">{count}</span>
        <button
          onClick={increementCount}
          className="cursor-pointer mt-3 ml-3 text-white bg-blue-900 font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-700"
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
