import { useState } from "react";

// 子组件1
function Son1(props) {
  let { sendMsg } = props;

  let [msg] = useState("高圆圆");

  function handlerClick() {
    sendMsg(msg);
  }

  return (
    <div>
      <div>子组件1：</div>
      <div>{msg}</div>
      <button onClick={handlerClick}>点我传给子组件2</button>
    </div>
  );
}

// 子组件2
function Son2(props) {
  let { val } = props;

  console.log("props", props);

  return (
    <div>
      <div>子组件2：</div>
      <div>{val}</div>
    </div>
  );
}

// 父组件
function App() {
  let [message, setMessage] = useState("");

  // 这是提供给组件1的函数
  function sendMsg(msg) {
    let newMessage = msg;
    setMessage(newMessage);
  }

  return (
    <div className="App">
      <div>--我是父组件--</div>

      <Son1 sendMsg={sendMsg} />

      <Son2 val={message} />
    </div>
  );
}

export default App;

// App-018-组件通信-兄弟组件
