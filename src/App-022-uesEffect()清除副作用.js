import { useEffect, useState } from "react";

// 当子组件卸载时，用useEffect回调返回的新函数，去清除副作用
function Son() {
  useEffect(() => {
    // 放一个定时器
    let timeId = setInterval(() => {
      console.log("高圆圆");
    }, 1000);

    return () => {
      // 清除定时器
      clearInterval(timeId);
    };
  }, []);

  return (
    <div>
      <div>-我是子组件-刘亦菲-</div>
    </div>
  );
}

// 父组件
function App() {
  let [isShow, setIsShow] = useState(true);

  function handlerClick() {
    let newVal = false;
    setIsShow(newVal);
  }

  return (
    <div className="App">
      <div>{isShow && <Son />}</div>

      <button onClick={handlerClick}>卸载组件</button>
    </div>
  );
}

export default App;

// App-022-uesEffect()清除副作用
