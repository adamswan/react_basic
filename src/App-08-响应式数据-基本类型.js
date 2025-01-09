import { useState } from "react";

function App() {
  // count 是响应式数据；setCount 是修改 count 的方法
  const [count, setCount] = useState(0);

  const handler = () => {
    // 使用 setCount 修改 count
    let newVal = count + 1
    setCount(newVal);
  };

  return (
    <div className="App">
      <button onClick={handler}>点我加1</button>
      
      <div>值：{count}</div>
    </div>
  );
}

export default App;

// App-08-响应式数据-基本类型
