function Son(props) {
  let {name, children} = props;

  return (
    <div>
      <div>--我是子组件--</div>
      <div>姓名：{name}</div>
      <div>children：{children}</div>
    </div>
  );
}

function App() {
  let name = "高圆圆";

  return (
    <div className="App">
      <div>--我是父组件--</div>

      <Son name={name}>
          <span style={{color: 'red'}}>123</span>
      </Son>
    </div>
  );
}

export default App;

// App-016-组件通信-props.children
