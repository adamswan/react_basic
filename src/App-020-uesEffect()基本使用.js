import { useState, useEffect } from "react";

// 父组件
function App() {
  // 列表数组
  let [arr, setArr] = useState([]);

  // 发请求
  async function getList() {
    let res = await fetch("http://geek.itheima.net/v1_0/channels");

    let jsonDoc = await res.json();
    console.log("jsonDoc", jsonDoc);

    let newVal = jsonDoc.data.channels;
    setArr(newVal);
  }

  // 组件挂载完毕时执行
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="App">
      <ul>
        {arr.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

// App-020-uesEffect()基本使用
