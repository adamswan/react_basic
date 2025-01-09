// 首字母大写的函数，就是 react 中的组件
const ButtonGroup = () => {
  return (
    <div>
      <button>按钮1</button> 
      <button>按钮2</button>
      <button>按钮3</button>
    </div>
  );
};

function InputGroup() {
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ButtonGroup />
      <InputGroup />
    </div>
  );
}

export default App;

// -07-react中的组件