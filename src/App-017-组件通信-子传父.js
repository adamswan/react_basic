import { useState } from "react";

// 子组件
function Son(props) {
  let { name, onGetValue } = props;

  function handlerClick() {
    onGetValue("我是子组件中的数据");
  }

  return (
    <div>
      <div>--我是子组件--</div>
      <div>姓名：{name}</div>

      <button onClick={handlerClick}>点我向父组件传值</button>
    </div>
  );
}

// 父组件
function App() {
  let name = "高圆圆";

  // 该函数传给子组件，在子组件中被调用
  function onGetValue(val) {
    console.log("val", val);

    // 用子组件传来的数据，渲染页面
    let newSonData = val;
    SetSonData(newSonData)
  }

 let [sonData, SetSonData] = useState('')

  return (
    <div className="App">
      <div>--我是父组件--</div>
      <div>来自子组件：{sonData}</div>

      <Son name={name} onGetValue={onGetValue} />
    </div>
  );
}

export default App;

// App-017-组件通信-子传父
