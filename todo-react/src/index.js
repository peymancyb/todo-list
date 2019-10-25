import React from "react";
import ReactDOM from "react-dom";
import TodoPage from "./pages/TodoPage";
import "antd/dist/antd.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <TodoPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />,
  rootElement
);
