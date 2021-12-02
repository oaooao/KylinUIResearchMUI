import React from "react";
import "./App.css";
import { Button } from "./components/Button/Button";

function App() {

  return (
      <div className="App">
        <h1>Hello</h1>
        <Button>按钮</Button>
        <Button variant="text">按钮</Button>
        <Button variant="contained" color="warning">按钮</Button>
        <Button variant="outlined">按钮</Button>
      </div>
  );
}

export default App;
