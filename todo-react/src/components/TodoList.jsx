import React from "react";
import { List, Input } from "antd";

function TodoList({
  data,
  onPressEnter,
  handleToggle,
  deleteTodo,
  handleChange
}) {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item
          actions={[
            <a key="list-loadmore-edit" onClick={() => handleToggle(index)}>
              edit
            </a>,
            <a key="list-loadmore-more" onClick={() => deleteTodo(index)}>
              delete
            </a>
          ]}
        >
          <List.Item.Meta
            style={{ display: "flex", alignItems: "center", margin: 0 }}
            title={
              item.editable ? (
                <Input
                  placeholder="Basic usage"
                  value={item.title}
                  onChange={({ target: { value } }) =>
                    handleChange(value, index)
                  }
                  onKeyDown={({ key }) => {
                    onPressEnter({ key, edit: true, index });
                  }}
                />
              ) : (
                <a href="#">{item.title}</a>
              )
            }
          />
        </List.Item>
      )}
    />
  );
}

export default TodoList;
