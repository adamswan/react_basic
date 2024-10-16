const list = [
  { name: "刘亦菲", id: 1 },
  { name: "高圆圆", id: 2 },
  { name: "周子琰", id: 3 },
];

function App() {
  return (
    <div className="App">
      {list.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}

export default App;
