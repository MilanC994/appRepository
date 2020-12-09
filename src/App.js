import React from "react";
import store from "./redux/store";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import CoinsContainer from "./components/CoinsContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 style={{ color: "orange" }}>Change Application</h1>
        <CoinsContainer />
      </div>
    </Provider>
  );
}

export default App;
