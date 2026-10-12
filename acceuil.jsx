

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>TP DevOps apres la modification avant de provoquer un conflit</h1>
      <p>Compteur pull request  {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}