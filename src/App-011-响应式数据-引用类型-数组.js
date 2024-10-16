import { useState } from "react";

function App() {
  // count 是响应式数据；setGirl 是修改 girl 的方法
  const [arr, setArr] = useState([1, 2, 3]);

  console.log("arr", arr);

  // 新增
  const add = () => {
    setArr([...arr, 888]);
  };

  // 删除最后一个成员
  const remove = () => {
    setArr(arr.slice(0, arr.length - 1));
  };

  // 在第2个位置处插入新成员
  const insert = (index) => {
    // 修改原数组
    arr.splice(index, 0, 999);
    // 再展开
    let newArr = [...arr];
    setArr(newArr);
  };

  return (
    <div className="App">
      <button onClick={add}>追加成员</button>

      <button onClick={remove}>删除最后一个成员</button>

      <button onClick={() => insert(1)}>指定位置插入成员</button>

      <div>数组: </div>
      <div>
        {arr.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
