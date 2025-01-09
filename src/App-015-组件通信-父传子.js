function Son(props) {
  // props 是一个对象，包含了父组件传递过来的所有数据
  let { name, age,  tall} = props;

  return (
    <div>
      <div>--我是子组件--</div>
      <div>姓名：{name}</div>
      <div>年龄：{age}</div>
      <div>身高：{tall}</div>
    </div>
  );
}

function App() {
  let name = "高圆圆";
  let age = 18;
  let tall = 168;

  return (
    <div className="App">
      <div>--我是父组件--</div>
      <Son name={name} age={age} tall={tall} />
    </div>
  );
}

export default App;

// App-015-组件通信-父传子
