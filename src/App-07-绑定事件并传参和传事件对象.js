const handler = (e, val) => {
  console.log(`事件对象`, e);
  console.log(`自定义参数`, val);
};

function App() {
  return (
    <div className="App">
      <button onClick={(e) => handler(e, "halo")}>点我</button>
    </div>
  );
}

export default App;
