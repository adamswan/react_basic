let bFlag = true;

function App() {
  return (
    <div className="App">
      {bFlag && <div>温蒂公主的侍卫</div>}
      {bFlag ? <div>蓝天般的你</div> : <div>圆圈夕阳的你</div> }
    </div>
  );
}

export default App;
