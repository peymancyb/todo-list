import React, { useState } from "react";
import { Row, Col } from "antd";
import useTodos from "../hooks/useTodos";
import TodoCreator from "../components/TodoCreator";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  const {
    todos,
    deleteTodo,
    createTodo,
    editTodo,
    handleToggle,
    handleChange
  } = useTodos();
  const [value, setValue] = useState("");

  const onPressEnter = ({ key, edit, index }) => {
    if (key === "Enter" && edit) {
      editTodo(index);
      return;
    }
    if (key === "Enter" && value) {
      createTodo(value);
      setValue("");
    }
  };

  const handleOnChange = ({ target: { value } }) => {
    setValue(value);
  };

  const onCreateTodo = () => {
    if (value) {
      createTodo(value);
      setValue("");
    }
  };

  return (
    <Row justify="center" type="flex">
      <Col span={6}>
        <TodoCreator
          value={value}
          onChange={handleOnChange}
          onKeyDown={onPressEnter}
          onCreate={onCreateTodo}
        />
        <TodoList
          data={todos}
          handleToggle={handleToggle}
          deleteTodo={deleteTodo}
          handleChange={handleChange}
          onPressEnter={onPressEnter}
        />
      </Col>
    </Row>
  );
};

export default TodoPage;
