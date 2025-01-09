const handler1 = (e) => {
  console.log('click事件', e);
};

const handler2 = (e) => {
  console.log('input事件', e.target.value);
};

function App() {
  return (
    <div className="App">
      <button onClick={handler1}>按钮</button>

      <input type="text" onInput={handler2} />
    </div>
  );
}

export default App;
