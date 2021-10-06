import { useState } from "react";
import Header from "./comopents/Header";

function App() {
  const [title, setTittle] = useState("welcome to my App");
  const [age, setAge] = useState(20);
  const changeTitle = () => {
    setTittle("Title changed");
    setAge(40);
  };
  return (
    <div className="App">
      <Header />
      <h1>{title}</h1>
      <h1>age : {age}</h1>
      <button onClick={changeTitle}>Change title</button>
    </div>
  );
}

export default App;
