import { useState } from "react";

function App() {
  // count 是响应式数据；setGirl 是修改 girl 的方法
  const [girl, setGirl] = useState({
    name: '高圆圆',
    age: 18
  });

  const handler = () => {
    setGirl({
      ...girl,
      name: '刘亦菲'
    });
  };

  return (
    <div className="App">
      <button onClick={handler}>点我修改对象</button>

      <div>对象：{girl.name}</div>
    </div>
  );
}

export default App;
