const handler = (val) => {
  console.log(`自定义参数`, val);
};

function App() {
  return (
    <div className="App">
      <button onClick={() => handler('halo')}>点我</button>
    </div>
  );
}

export default App;
