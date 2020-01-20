import React from "react";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Header branding="TODO_LIST" />
      <List />
    </div>
  );
}

export default App;
