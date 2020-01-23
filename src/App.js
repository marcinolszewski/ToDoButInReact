import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container">
      <Header branding="TODO_LIST" />
      <div className="row">
        <div className="col-12 mx-auto">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
