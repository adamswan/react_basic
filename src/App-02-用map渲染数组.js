const arr = [
  { name: "刘亦菲", id: 1 },
  { name: "高圆圆", id: 2 },
  { name: "周子琰", id: 3 },
];

function App() {
  return (
    <div className="App">
      <ul>
        {arr.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
