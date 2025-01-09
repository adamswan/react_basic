import { useState } from "react";

function App() {
  const [arr, setArr] = useState([1, 2, 3]);

  console.log("arr", arr);

  // 新增
  function add() {
    let newArr = [...arr, 888];
    setArr(newArr);
  }

  // 删除最后一个成员
  function remove() {
    let newArr = arr.slice(0, arr.length - 1); // slice包前不包后
    setArr(newArr);
  }

  // 在第2个位置处插入新成员
  function insert(index) {
    // 修改原数组
    arr.splice(index, 0, 777);
    // 再展开
    let newArr = [...arr];
    setArr(newArr);
  }

  return (
    <div className="App">
      <button onClick={add}>追加成员</button>

      <button onClick={remove}>删除最后一个成员</button>

      <button onClick={() => insert(1)}>指定位置插入成员</button>

      <div>数组: </div>
      <ul>
        {arr.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
