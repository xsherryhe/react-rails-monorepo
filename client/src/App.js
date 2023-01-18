import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/data", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <h1>Data from Server</h1>
      {data &&
        Object.entries(data).map(([key, val]) => (
          <div key={key}>
            {key}: {val}
          </div>
        ))}
    </div>
  );
}

export default App;
