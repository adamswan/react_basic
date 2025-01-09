// 1、传自定义参数
const handler1 = (id) => {
  console.log(`参数：`, id);
};

// 2、传事件对象和自定义参数
const handler2 = (e, id) => {
  console.log(`参数1：`, e);
  console.log(`参数2：`, id);
};

function App() {
  return (
    <div className="App">
      <button onClick={() => handler1(8)}>按钮1</button>

      <button onClick={(e) => handler2(e, 2)}>按钮2</button>
    </div>
  );
}

export default App;
