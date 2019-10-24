import React, { useState } from "react";
import { List, Skeleton, Row, Col, Checkbox, Spin, Icon, Input } from "antd";
import useTodos from "./hooks/useTodos";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const Todo = () => {
  const {
    todos,
    loading,
    deleteTodo,
    createTodo,
    editTodo,
    handleToggle,
    handleChange
  } = useTodos();
  const [value, setValue] = useState("");

  const onPressEnter = ({ key, edit, item }) => {
    console.log("key, edit, item -> ", key, edit, item);
    if (key === "Enter" && edit) {
      editTodo(item.id, item);
      return;
    }
    if (key === "Enter" && value) {
      createTodo(value);
      setValue("");
    }
  };
  return (
    <Row justify="center" type="flex">
      <Col span={6}>
        <Input
          placeholder="Basic usage"
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          onKeyDown={({ key }) => onPressEnter({ key })}
        />
        {todos && !loading ? (
          <List
            className="demo-loadmore-list"
            loading={loading}
            itemLayout="horizontal"
            dataSource={todos}
            renderItem={item => (
              <List.Item
                actions={[
                  <a
                    key="list-loadmore-edit"
                    onClick={() => handleToggle(item.id)}
                  >
                    edit
                  </a>,
                  <a
                    key="list-loadmore-more"
                    onClick={() => deleteTodo(item.id)}
                  >
                    delete
                  </a>
                ]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    style={{ display: "flex", alignItems: "center", margin: 0 }}
                    title={
                      item.editable ? (
                        <Input
                          placeholder="Basic usage"
                          value={item.title}
                          onChange={({ target: { value } }) =>
                            handleChange(value, item.id)
                          }
                          onKeyDown={({ key }) => {
                            onPressEnter({ key, edit: true, item });
                            console.log("key down");
                          }}
                        />
                      ) : (
                        <a href="#">{item.title}</a>
                      )
                    }
                  />
                </Skeleton>
              </List.Item>
            )}
          />
        ) : (
          <Spin indicator={antIcon} />
        )}
      </Col>
    </Row>
  );
};

export default Todo;
