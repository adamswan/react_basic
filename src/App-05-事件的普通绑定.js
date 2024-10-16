const handler = (e) => {
  console.log(`output->`, e);
};

function App() {
  return (
    <div className="App">
      <button onClick={handler}>点我</button>
    </div>
  );
}

export default App;
