import { useState } from "react";
import Card from "./Compo/Card";
import Data from "./Data.json";
import "./App.css";

function App() {
  const [data, setData] = useState(Data);

  return (
    <main>
      <div className="wrapper">
        {data.map((item) => {
          return <Card mydata={item} />;
        })}
      </div>
    </main>
  );
}

export default App;
