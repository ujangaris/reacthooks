function App() {
  const title = "welcome to my App";
  const age = 20;
  const link = "https://mfikri.com";
  return (
    <div className="App">
      <h1>{title}</h1>
      <h1>{age * 2}</h1>
      <h1>
        <a href={link}>Go to google</a>
      </h1>
    </div>
  );
}

export default App;
