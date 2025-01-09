import { useState } from "react";

function App() {
  let [val, setVal] = useState("");

  function handler(e) {
    let newVal = e.target.value;
    setVal(newVal);
  }

  return (
    <div className="App">
      <input
        type="text"
        value={val}
        onChange={(e) => {
          handler(e);
        }}
      ></input>
      <div>响应式数据:{val}</div>
    </div>
  );
}

export default App;

// App-013-表单元素上的双向绑定
