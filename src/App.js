import Header from "./comopents/Header";

function App() {
  const title = "welcome to my App";
  const age = 20;
  const link = "https://mfikri.com";
  const clickme = (name) => {
    console.log("Hello " + name);
  };
  return (
    <div className="App">
      <Header />
      <h1>{title}</h1>
      <h1>{age * 2}</h1>
      <h1>
        <a href={link}>Go to google</a>
      </h1>
      <button onClick={() => clickme("Ujang")}>Click Me</button>
    </div>
  );
}

export default App;
