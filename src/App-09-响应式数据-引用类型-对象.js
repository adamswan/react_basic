import { useState } from "react";

function App() {
 let [obj, setObj] = useState({
    name: "高圆圆",
    age: 18,
    tall: 168,
  });

  function changeObj() {
    let newObj = {
      ...obj,
      name: "刘亦菲", // 同名属性覆盖，替换原来的高圆圆
    }

    setObj(newObj)
  }

  return (
    <div className="App">
      <button onClick={changeObj}>修改对象</button>

      <div>名字：{obj.name}</div>
    </div>
  );
}

export default App;

// App-09-响应式数据-引用类型-对象
