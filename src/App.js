import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import Addtodo from "./components/AddTodo";

function App() {
  return (
    <Provider>
      <div className="App container">
        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
          <Header branding="TODO_LIST" />
          <Addtodo />
          <div className="row">
            <div className="col-12 mx-auto card card-body mb-3">
              <List />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
