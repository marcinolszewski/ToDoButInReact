import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <div className="App container">
        <Header branding="TODO_LIST" />
        <div className="row">
          <div className="col-12 mx-auto card card-body mb-3">
            <List />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
