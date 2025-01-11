import { useEffect, useState } from "react";

// 父组件
function App() {
  let [count, setCount] = useState(0);

  // 3、传特定依赖项时，回调在组件初始渲染完成后、特定依赖项变化时执行
  useEffect(() => {
   console.log('高圆圆');
  }, [count]); // 特定依赖项是 count，当 count 变化时，useEffect 的回调也会执行

  // count 的变化，也会让 useEffect 的回调执行
  function handlerClick() {
    let newVal = count + 1;
    setCount(newVal)
  }

  return (
    <div className="App">
     <button onClick={handlerClick}>按钮</button>
     <div>数：{count}</div>
    </div>
  );
}

export default App;

// App-021-uesEffect()的依赖项
