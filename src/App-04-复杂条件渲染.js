let wifeId = 3; // 1 2 3

const showWords = () => {
  if (wifeId === 1) {
    return <div>刘亦菲</div>;
  } else if (wifeId === 2) {
    return <div>高圆圆</div>;
  } else {
    return <div>周子琰</div>;
  }
};

function App() {
  return <div className="App">{showWords()}</div>;
}

export default App;
