import { useRef } from "react";

function App() {
  // 1、生成 ref 对象
  let inputRef = useRef();

  function getDom() {
    // 3、待 DOM 渲染完成后，获取 DOM
    console.log(inputRef.current);
  }

  return (
    <div className="App">
      {/* 2、ref 对象绑定为 ref 属性 */}
      <input type="text" ref={inputRef}></input>

      <button onClick={getDom}>获取DOM</button>
    </div>
  );
}

export default App;

// App-014-获取DOM
