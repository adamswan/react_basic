const age = 18;

const getWife = () => "高圆圆";

const obj = {
  color: "pink",
};

function App() {
  return (
    <div className="App">
      {/* 普通字符串 */}
      {"hi"}

      {/* 变量 */}
      {age}

      {/* 函数调用 */}
      {getWife()}

      {/* 调用内置方法 */}
      {new Date().getFullYear()}

      {/* 使用对象 */}
      <div style={obj}>粉色</div>
    </div>
  );
}

export default App;
