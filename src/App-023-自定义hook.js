import { useState } from "react";

function useToggle() {
  // 响应式数据、更新数据的方法
  let [isShow, setIsShow] = useState(true);

  // 点击按钮，更新 isShow
  function handlerClick() {
    let newVal = !isShow;
    setIsShow(newVal);
  }

  // 一定要返回出去
  return {
    isShow,
    handlerClick,
  };
}

// 父组件
function App() {
  let { isShow, handlerClick } = useToggle();

  return (
    <div className="App">
      <button onClick={handlerClick}>显示/隐藏</button>

      {isShow && <span>高圆圆</span>}
    </div>
  );
}

export default App;

// App-023-自定义hook
