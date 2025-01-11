import { useContext, createContext } from "react";

// 1、创建一个上下文ctx
let Ctx = createContext();

// 父组件
function App() {
  let msg = "高圆圆";

  return (
    <div className="App">
      <div>--我是父组件--</div>

      {/* 2、用 Ctx.Provider 包裹子组件A，并把值传给 value 属性 */}
      <Ctx.Provider value={msg}>
        <SonA />
      </Ctx.Provider>
    </div>
  );
}

// 子组件A
function SonA(props) {
  return (
    <div>
      <div>子组件A：</div>
      <SonB />
    </div>
  );
}

// 子组件B
function SonB(props) {
  // 3、通过 useContext 获取值
  let msg = useContext(Ctx);

  return (
    <div>
      <div>子组件B：</div>
      <div>{msg}</div>
    </div>
  );
}

export default App;

// App-019-组件通信-父组件与子孙组件
