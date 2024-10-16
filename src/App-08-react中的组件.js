// 首字母大写的函数，就是react中的组件
const ButtonComp = () => {
  return (
    <div>
      <button>按钮1</button> <button>按钮2</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ButtonComp />
    </div>
  );
}

export default App;
