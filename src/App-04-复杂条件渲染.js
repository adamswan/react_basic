function show(id) {  // id 可以是 1、2、3
  if (id === 1) {
    return <div>刘亦菲</div>;
  } else if (id === 2) {
    return <div>高圆圆</div>;
  } else if (id === 3){
    return <div>周子琰</div>;
  }
}

function App() {
  return <div className="App">{show(1)}</div>;
}

export default App;
