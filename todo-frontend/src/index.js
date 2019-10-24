import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Todo from "./components/Todo/Todo";
import store from "./redux/store";
import "antd/dist/antd.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Todo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
